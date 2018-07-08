const express = require('express')

const app = express ()

const PORT =  process.env.PORT|| 4000

app.get('/',  (req, res) => {
    res.send('hello express ')
})

app.get('/test',  (req, res) => {
    res.send('testing express ')
})
app.listen(PORT, () => {
 console.log(`server is running on PORT ${PORT}`)
})