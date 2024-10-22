
//リンクの場所

  

  //戻るボタンの場所
  function modorubasyo() {
    var element = document.getElementById("modorubasyo");
    element.style.position = 'fixed ';
    element.style.top = `${70}vh`;
    element.style.right = `${5}vw`;}
          modorubasyo();
  




  

  











//@@@@スクロールに応じて出たり消えたり
     const backbtn = document.querySelector('.modoru'); 
      window.addEventListener('scroll', () => {
    let scroll_Y = window.scrollY;
    console.log(scroll_Y);

    if (scroll_Y > 1000  && scroll_Y <= 5400) {
        backbtn.classList.add('active');
    } else {
        backbtn.classList.remove('active');
    }});




//@@@@ここより先、メニューバー





//window.addEventListener(`resize`, () => {
	//let zoom_levels = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth * 100;
	//zoom_levels = Math.floor(zoom_levels* 400 );

	//console.log(zoom_levels);})



  //スクロールさせたら変わる
  const elements = document.querySelectorAll('.obi, .link, .lightobi, .links,.WEBDESING,.sakusya');

  window.addEventListener('scroll', () => {
    let scroll_Y = window.scrollY;
    console.log(scroll_Y);
  
    // 各要素に対してクラスの追加/削除を行う
    elements.forEach(element => {
      if (scroll_Y > 100) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  });

    //スクロールさせたら変わる
    const element = document.querySelectorAll('.WEBDESING');

    window.addEventListener('scroll', () => {
      let scroll_Y = window.scrollY;
      console.log(scroll_Y);
    
      // 各要素に対してクラスの追加/削除を行う
      element.forEach(element => {
        if (scroll_Y > 100) {
          element.classList.add('up');
        } else {
          element.classList.remove('up');
        }
      });
    });


  function humbergerbasyo() {
      var element = document.getElementById("humberger-basyo");
      element.style.position = 'fixed ';
      element.style.right = `${2}vw`;
    }
    humbergerbasyo();
    
    
    
    
  function effectbasyo() {
      var element = document.getElementById("backgraund-basyo");
      element.style.position = 'fixed ';
      element.style.top= `${-70}px`;
      element.style.right = `${0}vw`;}  
      effectbasyo();



      $(function(){
        //フッターを最下部に固定
            var $footer = $('#footer');
            if(window.innerHeight > $footer.offset().top + $footer.outerHeight() ) {
                $footer.attr({'style': 'position:fixed; top:' + (window.innerHeight - $footer.outerHeight()) + 'px;' });
            }
        })

        
