// 公式より引用
asyncTest('asynchronous test: one second later!', function() {
  expect(1);

  setTimeout(function() {
    ok(true, 'Passed and ready to resume!');
    start();
  }, 1000);
});

pavlov.specify('Async', function(){
  // pavlov版。READMEより
  describe('An example', function(){
      it('can specify asynchronous specs', async(function(){
          // an async spec implementation will pause the test runner until 'resume()'
          setTimeout(function(){
              assert.pass();
              resume();
          }, 2000);
      }));
  });
});
