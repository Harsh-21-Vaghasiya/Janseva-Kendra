const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const cookie = require('cookie-parser');

const express = require('express');
const app = express();
app.use(express.json());
app.use(cookie());
const SECRETKEY = 'NoteApi';


const auth = (function (req, res, next) {


    try {
        console.log(req.cookies);
        // let token =window.cookie;
        console.log(token);
        
        // console.log('token' +token );
        if (token) {
            // token = token.split(" ")[1];
            let user = jwt.verify(token, SECRETKEY);
            req.userId = user.id;

        }
        else {
          return res.status(401).json({ 'message': ' user not authorized' });

        }

        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({ 'message': 'Unauthorized user not authorized' });

    }
});

module.exports = auth;