class Calculator {
  add(arg1, arg2) {
      return arg1 + arg2;
    }
  subtract(arg1, arg2) {
    return arg1 - arg2;
  }
  multiply(arg1, arg2) {
    return arg1 * arg2
  }
  divide(arg1, arg2) {
    if(arg2 === 0)
      return Number.NaN;
    else
      return arg1 / arg2;
  }
}

module.exports = Calculator;
