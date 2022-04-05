var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('This application is running on slave node. New changes are made!')
})

app.listen(3000, function () {
  console.log('Listening on port 3000...')
})
