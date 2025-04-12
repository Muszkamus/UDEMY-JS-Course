const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const spendingLimits = {
  jonas: 1500,
  matilda: 100,
};

const getLimit = user => spendingLimits.limits?.[user] ?? 0;

const add = function (value, description, user) {
  if (!user) user = 'jonas';
  user = user.toLowerCase();

  //   let lim;
  //   if (spendingLimits[user]) {
  //     lim = spendingLimits[user];
  //   } else {
  //     lim = 0;
  //   }

  if (value <= getLimit(user)) {
    budget.push({ value: -value, description: description, user });
  }
};
add(10, 'Pizza 🍕');
add(100, 'Going to movies 🍿', 'Matilda');
add(200, 'Stuff', 'Jay');

const checkExpenses = function () {
  // let lim;
  // if (spendingLimits[entry.user]) {
  //   lim = spendingLimits[entry.user];
  // } else {
  //   lim = 0;
  // }

  for (const entry of budget)
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
};

checkExpenses();

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget) {
    if (entry.value <= -bigLimit) {
      output += `${entry.description.slice(-2)} / `;
    }
  }
  output = output.slice(0, -2); // Trim trailing slash
  console.log(output);
};

console.log(budget);
logBigExpenses(100);
