const services = require('../services/authServices');
exports.addUser = async (req, res) => {
    try{
        const { username, password } = req.body;
        const user = await services.addUser({ username, password });
        res.status(201).json(user);
    }
    catch(error){
        res.status(500).json(error);
    }
}
exports.login = async (req, res) => {
    try{
        const matchUser = await services.loginVerification(req.body);
        res.status(200).json(matchUser);
    }
    catch(error){
        res.status(500).json(error);
    }
}
exports.verifyToken = async (req, res) => {
    try{
        const verify = await services.varifyToken(req.headers.authorization);
        if(verify){
            res.status(200).json({success:true});
        }
    }
    catch(error){
        res.status(401).json({error:error.message,success:false});
    }
}