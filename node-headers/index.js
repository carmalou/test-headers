const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.setHeader('x-fake-header', 'carmen is the best')
  res.redirect('http://localhost:3001/')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})