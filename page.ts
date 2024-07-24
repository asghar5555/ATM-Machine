// script.ts
const loginPage = document.getElementById('loginPage') as HTMLDivElement;
const atmPage = document.getElementById('atmPage') as HTMLDivElement;
const loginButton = document.getElementById('loginButton') as HTMLButtonElement;
const userIdInput = document.getElementById('userId') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;
const loginError = document.getElementById('loginError') as HTMLParagraphElement;
const withdrawButton = document.getElementById('withdrawButton') as HTMLButtonElement;
const depositButton = document.getElementById('depositButton') as HTMLButtonElement;
const balanceButton = document.getElementById('balanceButton') as HTMLButtonElement;
const transactionMessage = document.getElementById('transactionMessage') as HTMLParagraphElement;
const amountInput = document.getElementById('amount') as HTMLInputElement;
const confirmButton = document.getElementById('confirmButton') as HTMLButtonElement;

let balance = 0;
let currentTransaction: 'withdraw' | 'deposit' | null = null;

loginButton.addEventListener('click', () => {
    const userId = userIdInput.value;
    const password = passwordInput.value;

    if (userId === 'Ali' && password === '1214') {
        loginPage.classList.add('hidden');
        atmPage.classList.remove('hidden');
        loginError.textContent = '';
    } else {
        loginError.textContent = 'Invalid ID or Password';
    }
});

withdrawButton.addEventListener('click', () => {
    currentTransaction = 'withdraw';
    amountInput.classList.remove('hidden');
    confirmButton.classList.remove('hidden');
    transactionMessage.textContent = '';
});

depositButton.addEventListener('click', () => {
    currentTransaction = 'deposit';
    amountInput.classList.remove('hidden');
    confirmButton.classList.remove('hidden');
    transactionMessage.textContent = '';
});

balanceButton.addEventListener('click', () => {
    transactionMessage.textContent = `Your current balance is $${balance}`;
});

confirmButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        transactionMessage.textContent = 'Please enter a valid amount';
        return;
    }

    if (currentTransaction === 'withdraw') {
        if (amount > balance) {
            transactionMessage.textContent = 'Insufficient balance';
        } else {
            balance -= amount;
            transactionMessage.textContent = `Withdrawn $${amount}. New balance is $${balance}`;
        }
    } else if (currentTransaction === 'deposit') {
        balance += amount;
        transactionMessage.textContent = `Deposited $${amount}. New balance is $${balance}`;
    }

    amountInput.value = '';
    amountInput.classList.add('hidden');
    confirmButton.classList.add('hidden');
    currentTransaction = null;
});
