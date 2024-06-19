const express=require('express');
const router=express.Router();
const {submitCode}=require('./controller');

router.post('/', submitCode);

module.exports = router;
