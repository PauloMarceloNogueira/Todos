'use strict'
var Todo = require('./../Models/Todo.js');
var server = require('./../Server/server.js');

class DeleteCommand {
  execute(params,callback) {
    var data = true;
    var erro = false;

    Todo.find({_id:params}).remove()
      .then(function(data){
        console.log(data)
        data = {
          success : true,
          data : {
            message : 'Todo removed!'
          }
        };
        callback(erro,data);
      })
      .catch(function(e){
        erro = server.set().error.set('002');
        var success = false;
        var data = {success}
        callback(erro,data)
      })




  }
}

module.exports = new DeleteCommand();
