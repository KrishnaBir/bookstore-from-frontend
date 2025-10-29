const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('mern project till nodemon')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
