const path = require('path');
const express = require('express');
const app = express();

// 部署上线时读取静态文件
app.use(express.static(path.join(__dirname, '../')));

// 博客监听 3000 端口
app.listen(3000);
console.log('success listen at port:3000......');