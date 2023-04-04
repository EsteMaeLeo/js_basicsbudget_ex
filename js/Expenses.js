class Expenses extends Data {
  static counterExpense = 0;
  constructor(description, value) {
    super(description, value);
    this._idExpense = ++Expenses.counterExpense;
  }
  get idExpense() {
    return this._idExpense;
  }
}
