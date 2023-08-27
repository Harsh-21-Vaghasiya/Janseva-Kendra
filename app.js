const express = require('express');
const app = express();
const startServer = require('./server');
const bodyParser = require('body-parser')
const controller = require('./controller/controller')
const router = require('./router/basic');
const path = require('path')
const staticpath = path.join(__dirname, 'static');
// Use for use html data in node
app.set('view engine', 'ejs');
app.use('/login', (req, res) => {res.render('../views/login')});


app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }))
app.use(express.static(staticpath))
app.use(express.static(`${__dirname}/static`))



// testing

app.use('/',router);

app.listen(3000,()=>{
    console.log("Server started on port 3000");
});

startServer();