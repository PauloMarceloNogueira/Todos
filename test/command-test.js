var chai = require('chai');
var expect = chai.expect;
var command = require('./../command.js');

describe('AddCommand',function() {
  it('Should data is empty', function(){
    command.execute('Add','',function(err,data) {
      expect(err).to.equal(true)
    })
  })
})
