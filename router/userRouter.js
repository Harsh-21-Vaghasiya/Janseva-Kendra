const express = require('express');
const userRouter = express.Router();
const {logincheak,signupcheak, loginpage, signuppage} = require('../controller/userController');



userRouter.post('/logincheak', logincheak);
userRouter.post('/signupcheak', signupcheak);
userRouter.get('/login',loginpage);
userRouter.get('/signup', signuppage);


module.exports = userRouter;
