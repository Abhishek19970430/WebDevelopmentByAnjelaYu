import express from "express";
import bodyParser from "body-parser";
import { dirname} from 'path';
import { fileURLToPath } from "url";
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
const __dirname = dirname(fileURLToPath(import.meta.url));
// let submit = false;
let length=0;


app.get("/", (req, res) => {
   let type ="Enter Your Name Below👇";
  res.render(__dirname +"/views/index.ejs",{
    title:type
  });


});

app.post("/submit", (req, res) => {
  
    let fname =req.body["fName"]
    let Lname=req.body["lName"]
    length=(fname.length+Lname.length)
   let type =`There are ${length} letter in your name`
   res.render(__dirname +"/views/index.ejs",{
    title:type}

  );
   

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
