const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const cookie = require('cookie-parser');
const express = require('express');
const app = express();
app.use(express.json());
app.use(cookie());
const SECRETKEY = process.env.SECRETKEY;


const auth = (function (req, res, next) {


    try {
        let token = req.headers.cookie.split('=')[1];
        if (token) {
            let user = jwt.verify(token, SECRETKEY);

            console.log(user.id);
            req.userId = user.id;

        }
        else {
            res.status(401).render('login');

            // return res.status(401).json({ 'message': ' user not authorized' });

        }

        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).render('login');
        // res.status(401).json({ 'message': 'Unauthorized user not authorized' });

    }
});

module.exports = auth;