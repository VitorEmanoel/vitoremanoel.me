const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({

   title:{
       type: String,
       required: true
   },
    description:{
       type: String,
       required: true
    },
    github_link:{
       type: String,
       required: true
    }
});

const User = mongoose.model('project', ProjectSchema);
module.exports = User;
