//ゲームスタート
function gameStart(next){  
  document.getElementById(next).style.visibility = "visible";  //　問題を表示
  return false;
}

//回答の判定
function check(val, ans, next){  
  if (val === "") {
    alert("答えを入力してください。"); 
    return false; 
  } else if (val === ans) {
    alert("🎉🎉🎉   正解！   🎉🎉🎉"); 
    document.getElementById(next).style.visibility = "visible";  //　正解したら次の問題を表示
    return false;
  } else {
    alert("残念！！不正解！！！🙅‍♂️"); 
    return false;
  }
}
