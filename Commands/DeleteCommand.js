'use strict'
var error = require('./../errors.js');
var Todo = require('./../Models/Todo.js');
var Promise = require("bluebird");
var mongoose = require("mongoose");
var Todo = require('./../Models/Todo.js');

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
        erro = error.set('002');
        var success = false;
        var data = {success}
        callback(erro,data)
      })

    


  }
}

module.exports = new DeleteCommand();
