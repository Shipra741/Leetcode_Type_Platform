const Queue = require('bull');
const Submission = require('./model');

const jobQueue = new Queue('jobQueue', {
  redis: {
    host: 'localhost',
    port: 6379
  }
});

const submitCode=async(req,res)=>{
  const {username,code,language}=req.body;
  try {
    const submission=new Submission({username,code,language});
    await submission.save();
    await jobQueue.add({submissionId:submission._id});
    res.status(200).json({message:'Submission received',submissionId:submission._id});
  }catch(error){
    res.status(500).json({error:'Failed to submit'});
  }
};

module.exports={submitCode}
