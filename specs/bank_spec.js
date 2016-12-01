var Bank = require('../bank');
var assert = require('assert');

var bank;

describe('Bank', function(){
     beforeEach(function(){
          bank = new Bank();
     });

     it('has a collection of accounts which starts empty', function(){
          assert.equal(0, bank.accounts.length);
     })
})