function withExponents() {
    this.pow = function(arg1, arg2) {
      return Math.pow(arg1, arg2)
    },
    this.multiplyExp = function() {
      if (arguments.length === 0)
        return "this function requires at least one array.";

      var ret = 1;
      for (var i=0; i<arguments.length; i++) {
        ret *= this.pow(arguments[i][0], arguments[i][1]);
      }
      return ret;
    }
    this.divideExp = function() {
      if (arguments.length === 0)
        return "this function requires at least one array.";

      var ret = this.pow(arguments[0][0], arguments[0][1]);
      for (var i=1; i<arguments.length; i++) {
        ret /= this.pow(arguments[i][0], arguments[i][1])
      }
      return ret;
    }
}

module.exports = withExponents;
