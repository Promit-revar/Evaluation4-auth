const Joi = require('joi');
const validateUserSchema= Joi.object({
    username: Joi.string()
      .min(5)
      .max(20)
      .required(),
      
    password: Joi.string()
      .min(8)
      .max(100)
      .required()
  });
exports.validateUser = (req,res,next) => {
      const { error } = validateUserSchema.validate(req.body);
      if (error) {
        res.status(400).json({ error: error.message })
      }
      else{
        next();
      }
}