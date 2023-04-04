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
  let porcentage = (totalExpenses() / totalIncomes()) ;
  document.getElementById("budget").innerHTML = formatCurrency(buget);
  document.getElementById("income").innerHTML = formatCurrency(totalIncomes());
  document.getElementById("expense").innerHTML = formatCurrency(
    totalExpenses()
  );
  document.getElementById("porcentage").innerHTML = formatPorcentage(porcentage);
};

const formatCurrency = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  /*   //Colon -CR
  return valor.toLocaleString("es-CR", {
    style: "currency",
    currency: "CRC",
    minimumFractionDigits: 2,
  });*/
};

const formatPorcentage = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};
