const userModel = require('../models/userModels/userModel');
const jwt = require('jsonwebtoken');
const SECRETKEY = process.env.SECRETKEY;
const cookie = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
app.use(express.json());
app.use(cookie());



const logincheak = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;

    try {
        const userExists = await userModel.findOne({ email: email });

        if (!userExists) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Decrypt the password
        const matchpassword = await bcrypt.compare(password, userExists.password);

        if (!matchpassword) {
            return res.status(400).json({ message: 'Invalid password' });
        }
        const token = jwt.sign({ email: userExists.email, id: userExists._id }, SECRETKEY);


        // Cokkkie  Section

        const options = {
            expires: new Date(Date.now() + 3 * 60 * 60 * 1000 * 24),
            httpOnly: true,
        };

        res.status(201).cookie("token", token, options);

        res.redirect('/');

        // console.log(req.cookie.token);
        // res.status(201).json({ user: result, token: token });

        // res.status(200).json({ token: token, user: userExists });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'something went wrong' });
    }
};


const signupcheak = async (req, res) => {
    try {
        const { username, password, mobile, email } = req.body;
        console.log(req.body);

        const userexists = await userModel.findOne({ username: username });

        if (userexists) {
            return res.status(400).json({ message: "user already exists" });
        }

        const hashpassword = await bcrypt.hash(password, 10);
        const result = await userModel.create({
            username: username,
            password: hashpassword,
            mobile: mobile,
            email: email,

        });


        const token = jwt.sign({ email: result.email, id: result._id }, SECRETKEY);





        // Cokkkie  Section

        const options = {
            expires: new Date(Date.now() + 60 * 1000 * 5),
            httpOnly: true,
        };

        res.status(201).cookie("token", token, options);


        // res.status(201).json({ user: result, token: token });
        res.redirect('/login');




    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'something went wrong' });
    }
};

const signuppage = async (req, res) => {
    try {
        res.status(200).render('signup')
    } catch (err) {
        console.log(err);

    }
};




const loginpage = async (req, res) => {
    try {
        // const office = await Office.find({});
        res.status(200).render('login')
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'something went wrong while rendring the login page' });

    }
};


const logoutpage = async (req, res) => {


    try {
        res.clearCookie("token").redirect('/');

        console.log("Logout Sucessfully");
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'something went wrong While Logout' });
    }
}









module.exports = { logincheak, signupcheak, loginpage, signuppage, logoutpage };