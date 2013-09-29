var Calc = (function(){
  function Calc() {
  }

  Calc.prototype.add = function(x, y) {
    return x + y;
  }

  Calc.prototype.sum = function() {
    var sum = 0;
    for (i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }

  return Calc;
})();
