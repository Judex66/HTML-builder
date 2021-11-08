var readline = require('readline');
var fs = require('fs');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var name=rl.question((data)=>{
  console.log(data);
  rl.close();//press ctrl+D
});
var some=String(name);
fs.writeFile('read.txt',some,(error)=>{
  if(error) throw error;});