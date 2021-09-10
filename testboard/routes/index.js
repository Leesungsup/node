var express = require('express');
var router = express.Router();
const mysql=require('../mysql');
/* GET home page. */
router.get('/', function(req, res, next) {
  mysql.query('select * from user',function(err,rows,field){
    if(!err) { // 에러가 없다면
      res.send(rows); // rows 를 보내주자
    } else { // 에러가 있다면?
      console.log("err : " + err);
      res.send(err); // console 창에 에러를 띄워주고, 에러를 보내준다.
    }
  });
});

module.exports = router;
