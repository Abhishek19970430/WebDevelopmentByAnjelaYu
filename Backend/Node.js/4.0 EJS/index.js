import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const today = new Date();
  const day = today.getDate();

 let type = "a Weekday";
  let adv= "Its time to work hard"

if(day==0 || day==6){
   type="a Weekend";
   adv="Its time to fun";
}
  


  

  res.render("index.ejs",{
    dayType: type,
    advice: adv
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
