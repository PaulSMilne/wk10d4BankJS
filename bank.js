
var Bank = function(){
     this.accounts = [];
};

Bank.prototype = {
     addAccount: function(account){
          this.accounts.push(account);
     },
     findByName: function(name){
          var account = this.accounts.find( function(account){
               return name === account.name;
          })
          return account;
     },

     findLargestAccount: function(){
          var account = this.accounts.sort(function(a,b){
               return a.amount - b.amount;
          })
          var largestAccount = account.pop();
          return largestAccount;
     }
}
module.exports = Bank;


