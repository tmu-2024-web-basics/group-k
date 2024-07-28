

document.addEventListener("DOMContentLoaded", function() {
  const playGifBtn = document.getElementById("playGifBtn");
  const gifImage = document.getElementById("gifImage");

  playGifBtn.addEventListener("click", function() {
    // GIFを表示
    gifImage.style.display = "block";

    // ボタンを無効化
    playGifBtn.disabled = true;

    // 3秒後に別のページに移動する
    setTimeout(function() {
      window.location.href = "review/index.html"; // 移動先のページのURL
    }, 3000); // 3000ミリ秒（＝3秒）後に移動
  });
});