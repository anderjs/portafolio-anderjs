const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.listen(process.env.PORT || 3100, () => {
  console.log('Port running on', process.env.PORT || 3100)
})

app.get('/', (req, res) => {
  res.sendFile('index.html')
})