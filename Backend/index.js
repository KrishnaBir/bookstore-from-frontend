import dotenv from 'dotenv'
import express from 'express'

dotenv.config();

const app = express()

const PORT = process.env.PORT || 4000;

// console.log('Loaded PORT:', process.env.PORT);


app.get('/', (req, res) => {
  res.send('bookStore App')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
