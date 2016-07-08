'use strict'
var error = require('./../errors.js');
var Todo = require('./../Models/Todo.js');
var Promise = require("bluebird");
var mongoose = require("mongoose");

Promise.promisifyAll(mongoose);

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

    newTodo.saveAsync()
      .then(function(todo){

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
