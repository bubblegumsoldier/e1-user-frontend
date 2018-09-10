const express = require('express');
const router = express.Router();
const guideline = require('../models/guideline.model');
const db = 'mongodb://localhost:27017/newguidelines01';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err)
    {
        console.log('Could not connect to database');
        process.exit();
    }
    else
    {
        console.log("Successfully connected to the database");
    }
  });

router.get('/AllMedicalGuidelines', function(req, res){

    console.log('get request for all the medical guideline');
    guideline.find({})
    .exec(function(err, guideline){
        if(err)
        {
            console.log('error retriveing guideline');
        }
        else
        {
            res.json(guideline);
        }
    });
   });

   router.get('/AllSearches', function(req, res)
   {
    console.log('get request for all the medical guideline');
    guideline.find({$text: {$search: "cancer"}})
    .exec(function(err, guideline)
    {
        if(err)
        {
            console.log('error retriveing guideline');
        }
        else
        {
            res.json(guideline);
        }
    });
   });

module.exports = router;