// DOMの読み込みが終わったらfunction()の中の処理を実行します。
$(document).ready(function () {
  // 「国語、英語、数学、理科、社会」の点数（入力値）を取得して合計点と平均点を出すロジック
  function score_indicate() {
    // 変数「subject_points」に「国語、英語、数学、理科、社会」の点数の配列を代入します。
    let subject_points = [Number($('#national_language').val()),
    Number($('#english').val()),
    Number($('#mathematics').val()),
    Number($('#science').val()),
    Number($('#society').val())
    ];
    // 変数「sum」に「国語、英語、数学、理科、社会」の点数を足します。
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    // 「合計点：」(id="sum_indicate")に変数「sum」(合計点)を出力させます。
    $("#sum_indicate").text(sum);

    // 「平均点：」に各教科の平均点を出力する処理を記述する。
    let average = sum / subject_points.length
    $("#average_indicate").text(average);
    // ヒント：変数「average」に平均値を出して代入しましょう(平均をとりたい数の合計点数(sum) / 全体の個数)
    // ヒント：全体の個数はlengthメソッドを使って求めます。(lengthメソッド: 文字列の長さや配列の要素数などを取得するメソッド)
  };
  // 平均点数を取得し、取得した平均点数から「A、B、C、D」にランク分けするロジックを記述する。
  function get_achievement() {
    // 変数「averageIndicate」に
    // 平均点数をHTML上のid="average_indicate"から取得して代入します。
    let averageIndicate = $("#average_indicate").text();
    console.log(averageIndicate)
    // もし「averageIndicate」が80以上なら"A"を返します。
    if (averageIndicate >= 80) {
      return "A";
    }
    // もし「averageIndicate」が60以上なら"B"を返します。
    else if (averageIndicate >= 60) {
      return "B";
    }
    // もし「averageIndicate」が40以上なら"C"を返します。
    else if (averageIndicate >= 40) {
      return "C";
    }
    // もし「averageIndicate」がそれ以外なら"D"を返します。
    else {
      return "D";
    }
  };


  // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]のいずれかの点数が変更された際に「function score_indicate()」を発火させる処理です。
  $('#national_language, #english, #mathematics, #science, #society').change(function () {
    score_indicate();
  });
  // 「ランク」(id="evaluation")ボタンを押したら「get_achievement()」が出力される処理です。
  $('#btn-evaluation').click(function () {
    $("#evaluation").text(get_achievement());
  });

});
