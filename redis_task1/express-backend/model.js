const mongoose = require('mongoose');

const submissionSchema=new mongoose.Schema({
  username:String,
  code:String,
  language:String,
  status:{type:String,default:'pending'}, 
  result:String
},{timestamps:true});

const Submission=mongoose.model('Submission',submissionSchema);
module.exports=Submission;