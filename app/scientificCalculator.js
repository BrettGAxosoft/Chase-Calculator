var Calculator = require("./calculator");

class ScientificCalulator extends Calculator {
  sin(arg1) {
    return Math.sin(arg1);
  }
  cos(arg1) {
    return Math.cos(arg1);
  }
  tan(arg1) {
    return Math.tan(arg1);
  }
  log(arg1) {
    return Math.log(arg1);
  }
}

module.exports = ScientificCalulator;
