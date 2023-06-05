const express = require('express');
const mongoose = require('mongoose');
const app= express();


// DB Config
// const startServer = async ()=>{
//    mongoose.connect('mongodb+srv://root:root@de-5.ockbobb.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
//     console.log('Database connected');
// }


const startServer = async ()=>{
    mongoose.connect('mongodb+srv://admin:admin@jansevacluster.emnzais.mongodb.net/Janseva', {useNewUrlParser: true, useUnifiedTopology: true})
     console.log('Database connected');
 }
module.exports = startServer;