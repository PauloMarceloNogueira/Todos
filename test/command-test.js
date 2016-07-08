var chai = require('chai');
var expect = chai.expect;
var command = require('./../command.js');

describe('AddCommand',function() {
  it('Should data is empty', function(){
    command.execute('Add','',function(err,data) {

      expect(err.error_code).to.equal('001');
      expect(err.message).to.equal('Can not be null');

    })
  })

  it('Should success proccess', function(){
    var data = {
      name : 'TesteTODO',
      description : 'TestDescription',
      deadline : 'today'
    }
    command.execute('Add',data,function(err,data) {
      expect(err).to.equal(false);
      expect(data.success).to.equal(true);
      expect(data.message).to.equal('Added');
    })
  })
})

describe('GetCommand',function() {
  // it('Should return is empty',function() {
  //   command.execute('Get','',function(err,success){
  //     expect(err.error_code).to.equal('002');
  //     expect(err.message).to.equal('Is empty');
  //     expect(success).to.equal(false);
  //   })
  // })

  it('Should return success message and data', function() {
    command.execute('Get','',function(err,data){
      expect(err).to.equal(false);
      expect(data.success).to.equal(true);
      expect(data.data).to.exist;
    })
  })
})

describe('UpdateCommand', function() {
  var data = {
    id : 90,
    field : 'description',
    value : 'New description'
  }
  it('Should return error when not find id',function() {
    command.execute('Update',data,function(err,data) {
      expect(err.error_code).to.equal('003');
      expect(err.message).to.equal('Todo not found');
      expect(data).to.equal(false);
    })
  })

  it('Should return success message',function() {
    var data = {
      id : 80,
      field : 'description',
      value : 'New description'
    }
    command.execute('Update',data,function(err,data) {
      expect(err).to.equal(false)
      expect(data.success).to.equal(true);
      expect(data.data.message).to.equal('Todo updated!');
    })
  })

  it('Should without params', function() {
    var data = {
      id : 80,
      field : 'description'
      //value : 'New description'
    }
    command.execute('Update',data,function(err,data) {
      expect(err.error_code).to.equal('001');
      expect(data).to.equal(false);
    })
  })
})

describe('DeleteCommand',function() {
  it('Should without params',function(){
    command.execute('Delete','',function(err,data) {
      expect(err.error_code).to.equal('001');
      expect(data).to.equal(false);
    })
  })

  it('Should return success message',function() {
    command.execute('Delete',80,function(err,data) {
      expect(err).to.equal(false);
      expect(data.success).to.equal(true);
      expect(data.message).to.equal('Todo removed!');
    })
  })
})
