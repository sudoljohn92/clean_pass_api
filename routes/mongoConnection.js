var express = require('express');
const { route } = require('.');
var router=express.Router();
var mongoose = require('mongoose')

router.get("/salesOrder",function(req,res,next){
    mongoose.connect("mongodb://localhost:27017/clean_pass_db", {useNewUrlParser: true}, (err) =>{
        if(!err) {res.send("MongoDB Connected")}
        else{res.send("Mongo DB Not connected")}
    });
});

module.exports=router;
