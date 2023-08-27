const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const router = require('./router/basic');
const userRouter = require('./router/userRouter');
const path = require('path');
const staticpath = path.join(__dirname, 'static');
const mongoose= require('mongoose');


// for using the enviromental variables
const dotenv = require('dotenv');
dotenv.config();

// Use for use html data in node
app.set('view engine', 'ejs');



// UserRouter

app.use(userRouter);


app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }))
app.use(express.static(staticpath))
app.use(express.static(`${__dirname}/static`))



// testing

app.use('/', router);

const startServer = async () => {
    mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Database connected');
}
if(startServer()) {
    app.listen(3000, () => {
        console.log("Server started on port 3000");
    });
}


