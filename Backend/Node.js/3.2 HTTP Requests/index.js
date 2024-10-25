import express from 'express'

const app = express();
const port=3000;


 app.get("/",(req,res)=>{
    
    res.send("Hello, World");
 })

 app.get("/contact",(req,res)=>{
    
    res.send("Contact. Number-7503594243");
 })

 app.get("/about",(req,res)=>{
    
    res.send("My Name is Abhishek Verma and I am an Software Developer");
 })

 

app.listen(port,()=>{
    console.log(`Server is running on port number ${port}`)
})