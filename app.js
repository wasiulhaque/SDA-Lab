const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send("Welcome to Heroku Deployment.")
})

app.listen(8000,() => {
    console.log("Server is listening on port 8000.")
})