'use strict'
var error = require('./../errors.js');
var Todo = require('./../Models/Todo.js');

class AddCommand {
  execute(data,callback) {
    var erro = false;
    if(data == '') {
      erro = error.set('001')
    }

    var newTodo = new Todo({
      name : data.name,
      description : data.description,
      deadline : data.deadline
    });

    newTodo.save(function(err,todo) {
      if(err){
        erro = error.set('004');
        success = false
      }
      console.log(todo);
    })

    var success = {
      success : true,
      message : 'Added'
    }

    callback(erro,success)
  }
}

module.exports = new AddCommand()
