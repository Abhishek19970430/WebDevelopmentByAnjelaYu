const fs = require("fs");




fs.writeFile('CrazyThing.txt','I make this file and add data from terminal using node fs.writeFile module', (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 


// fs.readFile('d:/Web devlopment course by Angela yua/Backend/Node.js/2.2 Native Modules/message.txt','utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// }); 