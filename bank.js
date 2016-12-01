
var Bank = function(){
     this.accounts = [];
};

Bank.prototype = {
     addAccount: function(account){
          this.accounts.push(account);
     },

     findByName: function(name){
          return this.accounts.find( function(account){
               return name === account.name;
          })
     },

     findLargestAccount: function(){
          var account = this.accounts.sort(function(a,b){
               return a.amount - b.amount;
          })
          var largestAccount = account.pop();
          return largestAccount;
     },

     total: function(){ 
          var amounts = [];//could use filter.map chain to create the populated array.
          this.accounts.forEach(function(item){
               amounts.push(item.amount);
          })
          var sum = amounts.reduce(function(a,b){
               return a + b;
          }, 0)
          return sum;
     }

}
module.exports = Bank;


