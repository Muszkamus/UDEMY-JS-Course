'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
////////////////////////////////////////////////
/////////////////////////////////////////////////
const diplayMovements = function (movements) {
  // Empty the existing container
  containerMovements.innerHTML = ''; // similar to text content
  movements.forEach(function (mov, i) {
    // mov is the value, i is the position
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
  });
};
diplayMovements(account1.movements); // 200, 450, -400, 3000, -650

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })

    .reduce((acc, mov) => acc + mov, 0);

  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0]) //
      .join('');
  });
};

createUsernames(accounts); // const accounts = [account1, account2, account3, account4];

const updateUI = function (acc) {
  // Display movements
  diplayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event Handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent form from submitting
  currentAccount = accounts.find(
    // This function get the job done
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message

    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); // Buttons loses the focus

    // Summary and movements
    containerApp.style.opacity = 100;
    // Update UI
    updateUI(currentAccount);
  }
});
// Transfer Money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 && // Check if the transfer amount is positive
    currentAccount.balance >= amount && // Ensure the sender has enough balance
    receiverAcc?.username !== currentAccount.username // Verify the receiver is not the sender
  ) {
    currentAccount.movements.push(-amount); // Deduct the amount from the sender's account
    receiverAcc.movements.push(amount); // Add the amount to the receiver's account
    updateUI(currentAccount); // Refresh the UI to reflect the updated account details
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// Add an event listener to the 'btnClose' button to handle the click event
btnClose.addEventListener('click', function (e) {
  e.preventDefault(); // Prevents the default form submission behavior

  // Check if the entered username and PIN match the current account's credentials
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // Find the index of the account in the 'accounts' array
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // Explanation of findIndex:
    // - Iterates through each account in the 'accounts' array
    // - Returns the index of the first account where the username matches 'currentAccount.username'
    // - If no match is found, it returns -1

    console.log(index); // Log the found index for debugging purposes

    // Remove the account at the found index from the 'accounts' array
    accounts.splice(index, 1);

    // Hide the application interface (simulate account closure)
    containerApp.style.opacity = 0;
  }

  // Clear the input fields for username and PIN
  inputCloseUsername.value = inputClosePin.value = '';
});

///////////////////////////
/////////////////////
////////////////////////
///////////////////////////

// 1.
const bankDepositsSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositsSum);

// Calculate how many deposits there are over 1000
const numDeposit1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;
console.log(numDeposit1000);

///
///
let a = 10;
console.log(++a); // 11,  because ++ is before, but will update after.
console.log(a++); // 11,  because ++ is after, so it update immediately
