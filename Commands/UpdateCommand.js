'use strict'
var server = require('./../Server/server.js');
var Todo = require('./../Models/Todo.js');

class UpdateCommand {
  execute(params,callback) {
    var erro = false;
    var data = true;

    if(!params && !params.field && !params.value) {
      erro = server.set()error.set('001');
      data = false;
      callback(erro,data);
    }
    Todo.findById(params.id,function(err,todo){
      if(err){
        return console.log('error',err);
      }
      todo[params.field] = params.value;

      todo.save(function(err){
        if(err){
          erro = server.set()error.set('003');
          data = false;
          callback(erro,data);
        }
        data = {
            success : true,
            data : {
            message : 'Todo updated!'
          }
        }
        callback(erro,data);
      })
    })
  }

}

module.exports = new UpdateCommand();
