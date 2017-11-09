'use strict';

var fs = require('fs');
// 异步写入文件
var data = 'hello, Node.js';

fs.writeFile('output.txt', data, function (err) {
  if(err){
    console.log(err);
  } else {
    console.log('ok');
  }
});