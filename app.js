var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('This page running on master/dev node123.')
})

app.listen(3000, function () {
  console.log('Listening on port 3000...')
})



