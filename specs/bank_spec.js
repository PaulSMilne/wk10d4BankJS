var Bank = require('../bank');
var Account = require('../account');
var assert = require('assert');

var bank;
var account1;
var account2;
var account3;
var account4;

describe('Bank', function(){
     beforeEach(function(){
          bank = new Bank();
          account1 = new Account("Val", 10000, "business");
          account2 = new Account("Jo", 250, "personal");
          account3 = new Account("Pavlos", 25000, "business");
          bank.addAccount(account1);
          bank.addAccount(account2);
          bank.addAccount(account3);

     });

     it('has a collection of accounts which starts empty', function(){
          assert.equal(3, bank.accounts.length);
     });

     it('should be able to add account', function(){
          account4 = new Account("Paul", 500, "personal")
          bank.addAccount(account1);
          assert.equal(4, bank.accounts.length);
     });

     it('should be able to find the account by name', function(){
          var account = bank.findByName("Jo");
          assert.equal(account2, account);
     });

     it('should find the largest account', function(){
          assert.equal(account3, bank.findLargestAccount());
     });

     it('can find the total of all the accounts', function(){
          var sum = bank.total();
          assert.equal(35250, sum);
     })

});





