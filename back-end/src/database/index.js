const mongoose = require('mongoose');
const config = require('../../config/config').database;
const URL = `mongodb://${config.host}/${config.database}`;

mongoose.Promise = global.Promise;

module.exports.open = function (){
    mongoose.connect(URL, { useNewUrlParser: true }).then(()=>{
        console.log("Connected with database");
    });
};