const express = require('express');
const userRouter = express.Router();
const {logincheak,signupcheak, loginpage, signuppage} = require('../controller/userController');



userRouter.post('/logincheak', logincheak);
userRouter.post('/signupcheak', signupcheak);
userRouter.post('/login',loginpage);
userRouter.post('/signup', signuppage);


module.exports = userRouter;
