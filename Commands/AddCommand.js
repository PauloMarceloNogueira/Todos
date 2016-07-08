'use strict'

class AddCommand {
  execute(data,callback) {
    erro = false;
    if(data == '') {
      var erro = true;
    }
    callback(erro,'sucesso')
  }
}

module.exports = new AddCommand()
