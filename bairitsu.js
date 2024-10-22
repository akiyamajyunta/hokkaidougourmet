function bairitsu() {
  let zoom_level = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth * 100;

  return Math.floor(zoom_level * 50);
}
window.addEventListener(`resize`, () => { effect(); });
effecterikabasyo();
//位置調整
//10秒で実行する関数
//@@@@@ここより先、スクロールで現れたり消えたりver.1 @@@@
//const target = document.querySelector('#target');
//const observer = new IntersectionObserver(entries => {
//entries.forEach(entry => {
//if (entry.isIntersecting) {
//console.log('要素が画面内に入りました');
// 画面内に入ったときの処理をここに書く
//} else {
//console.log('要素が画面外に出ました');
// 画面外に出たときの処理をここに書く
//}
//});
//});
//observer.observe(target);
//@@@@@ここより先、スクロールで現れたり消えたりver.2@@@@
const backbtn = document.querySelector('.modoru'); // スペル修正

window.addEventListener('scroll', () => {
  let scroll_Y = window.scrollY;
  console.log(scroll_Y);
  if (scroll_Y > 1000) {
    backbtn.classList.add('active');
  } else {
    backbtn.classList.remove('active');
  }
});
//class= modoru
//@@@@ここより先、メニューバー
window.addEventListener(`resize`, () => {
  let zoom_level = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth * 100;
  zoom_level = Math.floor(zoom_level);

  console.log(zoom_level);
});
function humbergerbasyo() {
  var element = document.getElementById("humberger-basyo");
  element.style.position = 'fixed ';
  element.style.right = `${500}px`;
}
humbergerbasyo();
alert("作動してます");
