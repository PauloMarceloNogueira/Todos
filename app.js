var express = require('express');
var app = express();
var config = require('./Server/config.js');
var command = require('./command.js');
var db = require('./Server/db.js');

db.connect();
app.get('/add/:name/:description/:deadline',(req,res) => {

  var data = {
    name : req.param('name'),
    description : req.param('description'),
    deadline : req.param('deadline')
  }

  command.execute('Add',data,function(err,success) {
    if(err) {
      res.send(err)
    }
    console.log(success,'aqui')
    res.send(success)
  })
})

app.get('/get/:field?/:value?',(req,res) => {
    var param = false;
    if(req.param('field') && req.param('value')) {
      param = {
        field : req.param('field'),
        value : req.param('value')
      }
    }
    command.execute('Get',param,function(err,data) {
      if(err) {
        res.send(err)
      }
      res.send(data)
    })
})

app.get('/delete/:id',(req,res) => {
  command.execute('Delete',req.param('id'),function(err,data) {
    if(err) {
      res.send(err);
    }

    res.send(data);
  })
})

app.get('/update/:id/:field/:value', (req,res) => {
  var params = {
    id : req.param('id'),
    field : req.param('field'),
    value : req.param('value')
  };

  command.execute('Update',params,function(err,data) {
    console.log(data)
    res.send(data)
  })
})

app.listen(config.port,function(err,success){
  if (err) throw err;
  console.log('Server listen on '+ config.env + ':' + config.port);
})
