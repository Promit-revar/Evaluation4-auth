const router = require('express').Router();
const authController = require('../controllers/authController');
const middleware = require('../middlewares/validateUserMiddleware');
router.post('/user',middleware.validateUser,authController.addUser);
router.post('/login',authController.login);
router.get('/verify',authController.verifyToken);
module.exports = router;