$(".change_state").on('click',function(){
  var value = $(this).attr('data-key');
  $(this).addClass('current').siblings().removeClass('current')
  $('[data-value="'+value+'"]').show().siblings().hide()
});