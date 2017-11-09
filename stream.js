'usr strict';

var fs = require('fs');

var wsl = fs.createWriteStream('output.txt', 'utf-8');
wsl.write('使用Stream写入文本数据...\n');
wsl.write('END...');
wsl.end();

var ws2 = fs.createWriteStream('output.txt');
ws2.write(new Buffer('使用Stream写入二进制数据..\n', 'utf-8'));
ws2.write(new Buffer('END', 'utf-8'));
ws2.end();
