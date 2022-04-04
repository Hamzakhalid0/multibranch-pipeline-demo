var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('This application is on master node.')
})

app.listen(3000, function () {
  console.log('Listening on port 3000...')
})
