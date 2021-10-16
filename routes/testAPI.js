var express = require('express');
const { route } = require('.');
var router=express.Router();

router.get("/",function(req,res,next){
    res.send("API is working properly")
});

module.exports=router;