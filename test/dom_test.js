pavlov.specify('DOM', function(){
  describe('jquery', function(){
    it('適当にappendするテスト', function() {
      $('#qunit-fixture').append('<p id="id">hoge</p>');
      assert($('#id').text()).isSameAs('hoge');
      assert($('#qunit-fixture').find('p').length).isSameAs(4);
    });

    it('qunit-fixtureが都度リセットされていることの確認(実行順依存)', function() {
      var $p = $('#qunit-fixture').find('p');
      assert($p.length).isSameAs(3);
      assert($p.eq(0).text()).isSameAs('1');
      assert($p.eq(1).text()).isSameAs('2');
      assert($p.eq(2).text()).isSameAs('3');
    });
  });
});
