const Joi = require('joi');
const validateUserSchema= Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
      
    password: Joi.string()
      .min(8)
      .max(20)
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