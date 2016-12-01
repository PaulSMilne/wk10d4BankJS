var Bank = require('../bank');
var assert = require('assert');

var bank;

describe('Bank', function(){
     beforeEach(function(){
          bank = new Bank();
     });

     it('has a collection of accounts which starts empty', function(){
          assert.equal(0, bank.accounts.length);
     });

     it('should be able to add account', function(){
          bank.addAccount(account1);
          assert.equal(1, bank.accounts.length);
     })
})