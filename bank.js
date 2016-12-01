
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
     }
}
module.exports = Bank;


