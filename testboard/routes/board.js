var express = require('express');
var router = express.Router();
var mysql_ob=require('../db/db_conn')();
var conn=mysql_ob.init();
router.get('/list/:page',function(req,res,next){
    var page = req.params.page;
    sql="select idx, name, title, hit, date_format(modidate,'%Y-%m-%d %H:%i:%s') modidate, date_format(regdate,'%Y-%m-%d %H:%i:%s') regdate from board";
    conn.query(sql,function(err,rows){
        if(err)console.log(err);
        else{
            res.render('list',{title:'게시판입니다',rows:rows});
        }
    });
});
router.get('/list',function(req,res,next){
    res.redirect('/board/list/1');
})
router.get('/write',function(req,res,next){
    res.render('write',{title:'글쓰기'});
})
router.post('/write',function(req,res,next){
    var name =req.body.name;
    var title = req.body.title;
    var content = req.body.content;
    var passwd = req.body.passwd;
    var datas=[name,title,content,passwd];
    var sql ="insert into board(name,title,content,passwd,hit,modidate,regdate) values(?,?,?,?,0,now(),now())";
    conn.query(sql,datas,function(err,rows){
        if(err){
            console.log(err);
        }else{
            res.redirect('/board/list');
        }
    })
});
module.exports=router;