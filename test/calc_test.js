module('Calc', {
  calc: new Calc()
});

test('add', function() {
  deepEqual(3, this.calc.add(2, 1));
  deepEqual(0, this.calc.add(0, 0));
  deepEqual(1, this.calc.add(-1, 2));
});

test('sum', function() {
  deepEqual(0, this.calc.sum());
  deepEqual(1, this.calc.sum(1));
  deepEqual(10, this.calc.sum(1, 2, 3, 4));
});
