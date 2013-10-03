var obj = {
  m: function() { return 10; }
}

pavlov.specify('Spy(sinonjs)', function(){
  describe('mock', function(){
    it('オブジェクト指定してmockにできる', function() {
      var mock = sinon.mock(obj);
      mock.expects('m').once().returns(100);
      assert(obj.m()).isSameAs(100);
      mock.verify();
    });
  });
});
