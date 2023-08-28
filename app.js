const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router/basic');
const userRouter = require('./router/userRouter');
const path = require('path');
const staticpath = path.join(__dirname, 'static');
const mongoose= require('mongoose');

const Portno=process.env.PORT ||3000;

app.use(express.json(), bodyParser.urlencoded({ extended: true }));
app.use(express.static(staticpath));
app.use(express.static(`${__dirname}/static`));




// for using the enviromental variables
const dotenv = require('dotenv');
dotenv.config();

// Use for use html data in node
app.set('view engine', 'ejs');



// UserRouter

app.use(userRouter);



// testing

app.use('/', router);

const startServer = async () => {
    mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Database connected');
}
if(startServer()) {
    app.listen(Portno, () => {
        console.log("Server started on port "+Portno);
    });
}


