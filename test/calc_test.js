pavlov.specify('Calc', function(){
  describe('_', function(){
    var calc;
    before(function(){
      calc = new Calc();
    });

    describe('add', function(){
      it('2つの数を足す', function() {
        assert(calc.add(2, 1)).equals(3);
        assert(calc.add(0, 0)).equals(0);
        assert(calc.add(-1, 2)).equals(1);
      });
    });

    describe('sum', function(){
      it('引数をすべて足す', function() {
        assert(calc.sum()).equals(0);
        assert(calc.sum(1)).equals(1);
        assert(calc.sum(1, 2, 3, 4)).equals(10);
      });

      it('配列の場合はその合計値を出す', function() {
        assert(calc.sum([])).equals(0);
        assert(calc.sum([1])).equals(1);
        assert(calc.sum([1, 2, 3, 4])).equals(10);
      });
    });
  });
});
