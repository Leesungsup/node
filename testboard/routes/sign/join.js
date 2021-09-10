var express=require('express');
const router = express.Router();
const mysql = require('../../mysql');

router.get('/',function(req,res,next){
    res.render('sign/join');
});
router.post('/',function(req,res,next){
    const user = require('../../model/user/adduser')(req.body);
    var body = req.body;
    var userid = body.userid;
    var name = req.body.name;
    var salt = req.body.salt;
    var password = req.body.password;
    mysql.query('INSERT INTO user(userid,password,name,salt) values(?,?,?,?)',[userid,password,name,salt],function(err,rows){
        console.log(rows);
        if(!err){res.send(rows)}else{res.send(err)};
    })
});
module.exports=router;