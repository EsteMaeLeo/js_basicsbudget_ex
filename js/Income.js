class Income extends Data {
  static counterIncome = 0;
  constructor(description, value) {
    super(description, value);
    this._idIncome = ++Income.counterIncome;
  }
  get idIncome(){
    return this._idIncome
  }
}
