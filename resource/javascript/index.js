var wh = $(window).height();
var home_slider_heigth = wh - 100 - 44;

$(".home_slider").css({
  'height':home_slider_heigth
})
$("body").css({
    'display':'block'
})
var swiper_text = ['轮播1','轮播2','轮播三']
var mySwiper = new Swiper('.swiper-container',{
  pagination : ".pagination",
  paginationClickable : true,
  loop: true,
  autoplay: 3000,
  onSlideChangeStart: function(swiper){
    console.log(swiper)
      $(".swiper_text").html(swiper_text[swiper.activeLoopIndex])
    }
});  