var Calc = (function(){
  function Calc() {
  }

  Calc.prototype.add = function(x, y) {
    return x + y;
  }

  Calc.prototype.sum = function() {
    var ary = arguments.length === 1 && (arguments[0] instanceof Array)
              ? arguments[0]
              : arguments;
    if (ary.length === 0) {
      return 0;
    } else if (ary.length === 1) {
      return ary[0];
    }
    return Array.prototype.reduce.call(ary, function(x, y) { return x + y; });
  }

  return Calc;
})();
