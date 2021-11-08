var fs = require('fs');
var path = require('path');
fs.readdir('secret-folder', (erro,info) =>{
  console.log(info);
  info.forEach(file => {
    if (fs.statSync( 'secret-folder/'+file).size!=0){
      console.log(file);
      console.log(path.extname(file));
      console.log(fs.statSync( 'secret-folder/'+file).size+' '+'b'); 
    }    
  });
}); 
 