const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Running Dental-Clinic server')
})

app.listen(port, () => {
  console.log('Running Dental-Clinic server on port', port)
})