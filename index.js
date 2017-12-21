var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

app.get('/',function(req,res){

})

app.listen(80,function(){
  console.log('Server running on',80)
})
