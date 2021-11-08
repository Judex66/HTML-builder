var fs = require('fs');
fs.readFile('text.txt', 'utf8', (data) => {
  console.log(data);
});

