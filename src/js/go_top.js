$(document).ready(function(){
    $('body').append('<a class="" href="#" id="go-top" title="Вверх"><img src="/src/assets/up.svg" class=" p-3 mb-9  " ></a>');
  });
  
  $(function() {
   $.fn.scrollToTop = function() {
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() >= "10") $(this).fadeIn("slow")
    var scrollDiv = $(this);
    $(window).scroll(function() {
     if ($(window).scrollTop() <= "10") $(scrollDiv).fadeOut("slow")
     else $(scrollDiv).fadeIn("slow")
    });
    $(this).click(function() {
     $("html, body").animate({scrollTop: 0}, "slow")
    })
   }
  });
  
  $(function() {
   $("#go-top").scrollToTop();
  });