const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const app = express ()
app.use(bodyParser.json())

const PORT =  process.env.PORT|| 4000

app.get('/',  (req, res) => {
    res.send('hello express ')
})

app.get('/test',  (req, res) => {
    res.send('testing express ')
})

app.post('/auth',  (req, res) => {

   let userName =req.body.username;
   let password = req.body.password;


   if("wasif" === userName && "hello4040" === password)
{
  let token = jwt.sign({
sub : 1,
username : "admin",
  }, "helldeop", {expiresIn:"5 minutes", audience:"demo" });

    res.send({
   access_token:token
    })

}
else {
     res.send(`sorry couldn't find the user`)
}
    // res.send(`hi ${userName}`);
})

app.listen(PORT, () => {
 console.log(`server is running on PORT ${PORT}`)
})