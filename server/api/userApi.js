var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

// 增加用户接口
router.post('/addUser', (req, res) => {
  var sql = $sql.user.add;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.username, params.age], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

// 修改用户接口
router.post('/editUser', (req, res) => {
  var sql = $sql.user.edit;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.username, params.age, params.id], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

// 查看用户接口
router.get('/viewUser', (req, res) => {
  console.log('req.baseUrl:'+req.baseUrl);
  console.log('req.body:'+req.body);
  console.log('req.hostname:'+req.hostname);
  console.log('req.ip:'+req.ip);
  console.log('req.path:'+req.path);
  console.log('req.route:'+req.route);
  var sql = $sql.user.view;
  var params = req.query;
  // console.log(params);
  conn.query(sql, [params.id], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

// 删除用户接口
router.post('/removeUser', (req, res) => {
  var sql = $sql.user.remove;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.id], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

module.exports = router;
