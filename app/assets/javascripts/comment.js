$(function(){
  function buildMESSAGE(comment) {
    var comments = $('tbody').append('<tr class="comments" data-id=' + comment.id + '><td>' + comment.text + '</td><td><a href="/comments/' + comment.id + '">Show</a></td><td><a href="/comments/' + comment.id +'/edit">Edit</a></td><td><a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/comments/' + comment.id + '">Destroy</a></td>');
    //'tbody'に'tr'以下のhtml全てをappendする
  }

  $(function(){
    setInterval(update, 10000);
    //10000ミリ秒ごとにupdateという関数を実行する
  });
  function update(){ //この関数では以下のことを行う
    if($('.comments')[0]){ //もし'comments'というクラスがあったら
      var comment_id = $('.comments:last').data('id'); //一番最後にある'comments'というクラスの'id'というデータ属性を取得し、'comment_id'という変数に代入
    } else { //ない場合は
      var comment_id = 0 //0を代入
    }
    $.ajax({ //ajax通信で以下のことを行う
      url: location.href, //urlは現在のページを指定
      type: 'GET', //メソッドを指定
      data: { //railsに引き渡すデータは
        comment: { id: comment_id } //このような形(paramsの形をしています)で、'id'には'comment_id'を入れる
      },
      dataType: 'json' //データはjson形式
    })
    .always(function(data){ //通信したら、成功しようがしまいが受け取ったデータ（@new_comment)を引数にとって以下のことを行う
      $.each(data, function(i, data){ //'data'を'data'に代入してeachで回す
        buildMESSAGE(data); //buildMESSAGEを呼び出す
      });
    });
  }
});