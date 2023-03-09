const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const utils = require('../utils/insertIntoRedis');
require('dotenv').config();
exports.addUser = async(data) => {
    const saltRounds = 10;
    data.password = await bcrypt.hash(data.password,saltRounds);
    const { email, password } = data;
    return await db.User.create({ email, password });
        
}
exports.loginVerification = async(data) => {
    const { email, password } = data;
    const user = await db.User.findOne({ where: { email } });
    //console.log(user);
    if(user){
        const passwordMatch = await bcrypt.compare(password,user.dataValues.password);
        console.log(passwordMatch)
        if(passwordMatch){
            const token = jwt.sign({ email }, process.env.JWT_SECRET,{ expiresIn: '1D' });
            await utils.insertIntoRedis(token);
            return {token:token,success:true};
        }
    }
    return false;
}
exports.varifyToken = async(token) => {
        const tokenValid=await utils.getFromRedis(token);
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await db.User.findOne({ where: { email: decoded.email } });
        if(user){
            return true;
        }
        return false && tokenValid; 
}