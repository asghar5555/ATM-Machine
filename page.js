// script.ts
var loginPage = document.getElementById('loginPage');
var atmPage = document.getElementById('atmPage');
var loginButton = document.getElementById('loginButton');
var userIdInput = document.getElementById('userId');
var passwordInput = document.getElementById('password');
var loginError = document.getElementById('loginError');
var withdrawButton = document.getElementById('withdrawButton');
var depositButton = document.getElementById('depositButton');
var balanceButton = document.getElementById('balanceButton');
var transactionMessage = document.getElementById('transactionMessage');
var amountInput = document.getElementById('amount');
var confirmButton = document.getElementById('confirmButton');
var balance = 0;
var currentTransaction = null;
loginButton.addEventListener('click', function () {
    var userId = userIdInput.value;
    var password = passwordInput.value;
    if (userId === 'Ali' && password === '1214') {
        loginPage.classList.add('hidden');
        atmPage.classList.remove('hidden');
        loginError.textContent = '';
    }
    else {
        loginError.textContent = 'Invalid ID or Password';
    }
});
withdrawButton.addEventListener('click', function () {
    currentTransaction = 'withdraw';
    amountInput.classList.remove('hidden');
    confirmButton.classList.remove('hidden');
    transactionMessage.textContent = '';
});
depositButton.addEventListener('click', function () {
    currentTransaction = 'deposit';
    amountInput.classList.remove('hidden');
    confirmButton.classList.remove('hidden');
    transactionMessage.textContent = '';
});
balanceButton.addEventListener('click', function () {
    transactionMessage.textContent = "Your current balance is $".concat(balance);
});
confirmButton.addEventListener('click', function () {
    var amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        transactionMessage.textContent = 'Please enter a valid amount';
        return;
    }
    if (currentTransaction === 'withdraw') {
        if (amount > balance) {
            transactionMessage.textContent = 'Insufficient balance';
        }
        else {
            balance -= amount;
            transactionMessage.textContent = "Withdrawn $".concat(amount, ". New balance is $").concat(balance);
        }
    }
    else if (currentTransaction === 'deposit') {
        balance += amount;
        transactionMessage.textContent = "Deposited $".concat(amount, ". New balance is $").concat(balance);
    }
    amountInput.value = '';
    amountInput.classList.add('hidden');
    confirmButton.classList.add('hidden');
    currentTransaction = null;
});
