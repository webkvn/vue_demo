// node 后端服务器
const express = require('express');
const app = express();
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const rfs = require('rotating-file-stream')
const bodyParser = require('body-parser');
const userApi = require('./api/userApi');
const uploadApi = require('./api/uploadApi');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

var logDirectory = path.join(__dirname, 'log');
// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
// create a rotating write stream
var accessLogStream = rfs('access.log', {
  interval: '1d', // rotate daily
  path: logDirectory
})
app.use(morgan('combined', {
  stream: accessLogStream
}));

app.use(function(req, res, next) {
  res.send('ok');
});

// 后端api路由
app.use('/api/user', userApi);
app.use('/api/upload', uploadApi);



// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');
