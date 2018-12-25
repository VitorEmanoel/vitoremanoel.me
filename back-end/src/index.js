//Imports
const express = require('express');
//Routes
const projects = require('./routes/projects');
//Database
const database = require('./database/');


//Config
const config = require('../config/config');


//Implementations
const app = express();
const server = require('http').Server(app);


//Configuration
//Body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//Routes
app.use('/projects', projects);


module.exports.start = function(){
    database.open();
    server.listen(config.web.port, (err) =>{
        if(err) throw err;
        console.log(`Server started in ${config.web.port}`);
    })
};



