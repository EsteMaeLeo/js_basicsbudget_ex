const incomes = [new Income("Salary", 2100), new Income("Car sale", 1500)];

const expenses = [new Expenses("rent", 900), new Expenses("tickets", 90)];

let loadApp = () => {
  loadCabecero();
  loadIncomes();
  loadExpenses();
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
  let porcentage = totalExpenses() / totalIncomes();
  document.getElementById("budget").innerHTML = formatCurrency(buget);
  document.getElementById("income").innerHTML = formatCurrency(totalIncomes());
  document.getElementById("expense").innerHTML = formatCurrency(
    totalExpenses()
  );
  document.getElementById("porcentage").innerHTML =
    formatPorcentage(porcentage);
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

const loadIncomes = () => {
  let incomesHTML = " ";
  for (let income of incomes) {
    incomesHTML += createIncomesHTML(income);
  }
  document.getElementById("lista-ingresos").innerHTML = incomesHTML;
};

const createIncomesHTML = (income) => {
  let incomeHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${income.description}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatCurrency(income.value)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline"></ion-icon>
            </button>
        </div>
    </div>
  </div>`;
  return incomeHTML;
};

const loadExpenses = () => {
  let expensesHTML = " ";
  for (let expense of expenses) {
    expensesHTML += createExpensesHTML(expense);
  }
  document.getElementById("lista-egresos").innerHTML = expensesHTML;
};

const createExpensesHTML = (expense) => {
  let porcentage = expense.value / totalIncomes();  
  let expenseHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${expense.description}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatCurrency(expense.value)}</div>
        <div class="elemento_porcentaje">${formatPorcentage(porcentage)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline"></ion-icon>
            </button>
        </div>
    </div>
</div>
`;
  return expenseHTML;
};
