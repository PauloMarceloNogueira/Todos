'use strict'
var server = require('./../Server/server.js');
var Todo = require('./../Models/Todo.js');

server.set().Promise.promisifyAll(server.set().mongoose);

class AddCommand {
  execute(data,callback) {
    var erro = false;
    if(data == '') {
      erro = server.set().error.set('001')
    }

    var newTodo = new Todo({
      name : data.name,
      description : data.description,
      deadline : data.deadline
    });

    newTodo.saveAsync()
      .then(function(todo){
      console.log('allalala');
      var success = {
          success : true,
          message : 'Added',
          data : todo
        }

        callback(erro,success)

      })


  }
}

module.exports = new AddCommand()
