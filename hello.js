'use strict';

var s = 'hello';

function greet(name) {
  console.log(s+','+name+'!');
}
function set(name) {
  console.log(s+name);
}

module.exports = {
  greet: greet,
  set: set
};