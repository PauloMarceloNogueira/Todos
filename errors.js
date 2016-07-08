'use strict'
class Errors {

  mappingMessage(error_code) {
    if(error_code === '001') {
      return 'Can not be null'
    }

    if(error_code === '002') {
      return 'Is empty'
    }

    if(error_code === '003') {
      return 'Todo not found'
    }

    if(error_code === '004') {
      return 'MongoDB Error'
    }

  }

  set(error_code) {
    var data = {
      error_code,
      message : this.mappingMessage(error_code)
    }
    return data;
  }
}

module.exports = new Errors();
