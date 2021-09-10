var express = require("express");
var router = express.Router();

router.get("/",function(req,res,next){
    res.render("form",{
        name: "Lee",
        blog: "tistory.org",
        homepage: 'gcorder.net'});
});
module.exports=router;