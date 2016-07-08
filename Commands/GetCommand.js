'use strict'
var error = require('./../errors.js');
var Promise = require("bluebird");
var mongoose = require("mongoose");
var Todo = require('./../Models/Todo.js');

Promise.promisifyAll(mongoose);

class GetCommand {
  execute(param,callback) {
    var erro = false;
    var success = true;
    var query = {}

    if(this.hasParams) {
      var fields = param.field;
      var value = param.value;
      query[fields] = value;
    }

    Todo.find(query)
      .then(function(data){
        if (data == null || data =='') {
          console.log('aqui')
          erro = error.set('002')
          success = false;
        }
        data = {
          success : true,
          data
        }
        callback(erro,data)
      })
  }

  hasParams(param) {
    if(param && param.field && param.value){
      return true;
    }
    return false;
  }
}

module.exports = new GetCommand()
