jQuery( window ).on( 'scroll', function() {
  if ( 300 < jQuery( this ).scrollTop() ) { 
    jQuery( '.header-top' ).addClass( 'change-color' );
  } else {
    jQuery( '.header-top' ).removeClass( 'change-color' );
  }
});

$(function() {
  /* SP menu */
  function toggleNav() {
      var body = document.body;
      var hamburger = document.getElementById('nav_btn');
      var blackBg = document.getElementById('nav_bg');
      hamburger.addEventListener('click', function() {
          body.classList.toggle('nav_open'); //メニュークリックでnav-openというクラスがbodyに付与
      });
      blackBg.addEventListener('click', function() {
          body.classList.remove('nav_open'); //もう一度クリックで解除
      });
  }
  toggleNav();
});


$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

