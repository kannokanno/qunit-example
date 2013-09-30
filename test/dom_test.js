pavlov.specify('DOM', function(){
  describe('jquery', function(){
    it('適当にappendするテスト', function() {
      $('#qunit-fixture').append('<p id="id">hoge</p>');
      assert($('#id').text()).equals('hoge');
      assert($('#qunit-fixture').find('p').length).equals(4);
    });

    it('qunit-fixtureが都度リセットされていることの確認(実行順依存)', function() {
      var $p = $('#qunit-fixture').find('p');
      assert($p.length).equals(3);
      assert($p.eq(0).text()).equals(1);
      assert($p.eq(1).text()).equals(2);
      assert($p.eq(2).text()).equals(3);
    });
  });
});

