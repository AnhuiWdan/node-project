'use strict';

var fs = require('fs');
// 异步读取文件
/*
fs.readFile('sample.txt', 'utf-8', function (err, data) {
  if(err){
    console.log(err);
  } else {
    console.log(data);
  }
})*/
fs.readFile('fail.png', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    console.log(data.length + ' bytes');
  }
})