var express = require('express');
var app = express();
var config = require('./Server/config.js');
var command = require('./command.js');

app.get('/add/:name/:description/:deadline',(req,res) => {

  // var data = {
  //   name : req.param('name'),
  //   description : req.param('description'),
  //   deadline : req.param('deadline')
  // }
  var data = '';

  command.execute('Add',data,function(err,succes) {
    if(err) {
      console.log(err)
    }
  })


})

app.listen(config.port,function(err,success){
  if (err) throw err;
  console.log('Server listen on '+ config.env + ':' + config.port);
})
