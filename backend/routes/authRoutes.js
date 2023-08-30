const express = require('express');
const authController = require('../controllers/authControllers');
const { registerSchema, loginSchema } = require('../schemas');
const { authenticate, validateBody } = require('../middlewares');

const router = express.Router();

router.post('/register', validateBody(registerSchema), authController.register);

router.post('/login', validateBody(loginSchema), authController.login);

router.get('/current', authenticate, authController.getCurrent);

router.post('/logout', authenticate, authController.logout);

module.exports = router;
