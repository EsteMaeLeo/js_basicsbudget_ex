const incomes = [new Income("salario", 2100), new Income("Car sale", 1500)];

const expenses = [new Expenses("rent", 900), new Expenses("tickets", 90)];

let loadApp = () => {
  loadCabecero();
};

let totalIncomes = () => {
  let totalIncomes = 0;
  for (let income of incomes) {
    totalIncomes += income.value;
  }
  return totalIncomes;
};

let totalExpenses = () => {
  let totalExpenses = 0;
  for (let expense of expenses) {
    totalExpenses += expense.value;
  }
  return totalExpenses;
};

let loadCabecero = () => {
  let totalInco = totalIncomes();
  let buget = totalIncomes() - totalExpenses();
  let porcentage = totalExpenses() /  totalIncomes() * 100;
  document.getElementById("budget").innerHTML = buget;
  document.getElementById("income").innerHTML = totalIncomes();
  document.getElementById("expense").innerHTML = totalExpenses();
  document.getElementById("porcentage").innerHTML = porcentage;
};
