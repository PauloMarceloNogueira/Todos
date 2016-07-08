'use strict'
var server = require('./../Server/server.js');
var Todo = require('./../Models/Todo.js');

server.set().Promise.promisifyAll(server.set().mongoose);

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
        if(data == ''){
          erro = server.set().error.set('002')
          success = false;
          var data = {success}
          callback(erro,data)
        }
        data = {
          success : true,
          data
        }
        callback(erro,data)
      })
      .catch(function(e){
        erro = sserver.set().error.set('002')
        success = false;
        var data = {success}
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
