//business logic

var balance = 0;

function BankAccount (name, initialdeposit, balance, deposit, withdrawal) {
  this.userName = name;
  this.initialdeposit = initialdeposit;
  this.userBalance = balance;
  this.userDeposit = deposit;
  this.userWithdrawal = withdrawal;
}

//set object Prototypes

BankAccount.prototype.addDeposit = function () {
  balance += this.userDeposit;
}

BankAccount.prototype.subtractWithdrawal = function () {
  balance -= this.userWithdrawal;
}

var resetFields = function () {
  $("input#deposit").val("");
  $("input#withdrawal").val("");
}



// user Logic
$(function(){
  $("form#register").submit(function(event){
    event.preventDefault();

    var userName = $(".username").val();
    var initialDeposit = parseInt($(".initialDeposit").val());
    balance = initialDeposit;

    var userInfo = new BankAccount(userName, initialDeposit, balance);

    $("#balance-output").show();
    $("#balance").text("$" + balance.toFixed(2));
    $("#userName").text(userName);

      $("form#submitDeposit").submit(function(event){
        event.preventDefault();

        var userDeposit = parseInt($(".deposit").val());

        userInfo.userDeposit = userDeposit;
        userInfo.addDeposit();
        $("#balance").text("$" + balance.toFixed(2));
      });
      resetFields();

      $("form#submitWithdrawal").submit(function(event){
        event.preventDefault();

        var userWithdrawal = parseInt($(".withdrawal").val());
        userInfo.userWithdrawal = userWithdrawal;
        userInfo.subtractWithdrawal();

        $("#balance").text("$" + balance.toFixed(2));

      });
      resetFields();
  });
});
