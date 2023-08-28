const express = require('express');
const auth = require('../middleware/auth');

const userRouter = express.Router();
const { logincheak, signupcheak, loginpage, signuppage, logoutpage } = require('../controller/userController');



userRouter.post('/logincheak', logincheak);
userRouter.post('/signupcheak', signupcheak);
userRouter.get('/login', loginpage);
userRouter.get('/signup', signuppage);
userRouter.get('/logout', auth, logoutpage);


module.exports = userRouter;
