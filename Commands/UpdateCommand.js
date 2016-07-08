'use strict'
var error = require('./../errors.js');
var Promise = require("bluebird");
var mongoose = require("mongoose");
var Todo = require('./../Models/Todo.js');

class UpdateCommand {
  execute(params,callback) {
    var erro = false;
    var data = true;

    if(params && params.field && params.value) {
      erro = error.set('001');
      data = false;
    }

    Todo.find({_id:params.id})
      .then(function(data) {
        console.log('lalalal')
        if(!data) {
          erro = error.set('003');
          data = false;
        }
        data[0][params.field] = params.value;
        data[0].saveAsync()
          .then(function(msg) {
            data = {
              success : true,
              data : {
                message : 'Todo updated!'
              }
            }
          })
      })

      callback(erro,data);


  }

}

module.exports = new UpdateCommand();
