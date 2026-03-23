require('dotenv').config()
const router = require('./Routes');
const express = require('express')
const dbConnection = require('./config/db')

const app = express()
const port = 3000

app.use(router);

dbConnection()



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
