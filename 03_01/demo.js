var fs = require('fs');
var data = require('./data');

console.log(data.name)

fs.readFile('./data.json', 'utf-8', (err, data) =>{
  var data = JSON.parse(data)
  console.log(data.name)
})