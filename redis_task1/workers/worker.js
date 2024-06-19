const Queue = require('bull');
const mongoose = require('mongoose');
const Submission = require('../express-backend/model');
const dotenv=require("dotenv").config()
const url=process.env.URL

const jobQueue = new Queue('jobQueue', {
  redis: {
    host: 'localhost',
    port: 6379
  }
});

mongoose.connect(url).then(()=>{
    console.log("connected successfully")
}).catch((err)=>{
    console.log("error while connecting")
});

jobQueue.process(async (job) => {
  const {submissionId} = job.data;

  try {
    const submission = await Submission.findById(submissionId);
    if (!submission) throw new Error('Submission not found');
    submission.status = 'processing';
    await submission.save();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    submission.status = 'completed';
    submission.result = 'Passed'; 
    await submission.save();
    console.log('Job completed', submissionId);
  } catch (error) {
    console.error('Job failed', error);
  }
});
