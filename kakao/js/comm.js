$(function(){

  $('.depth1>li').mouseover(function(){
    $(this).children('.depth2').stop().slideDown()
  });
  $('.depth1>li').mouseleave(function(){
    $(this).children('.depth2').stop().slideUp()
  });


  var now = 1;
  var width = 1000;

  var slide = setInterval(function(){
    if(now<2){
      $('.mainslide>ul').animate({
        'left':(now*width*(-1))+'px'
      });
      now++;
    }else{
      $('.mainslide>ul').animate({
        'left':'0px'
      });
      now=1;
    }
  },2000);

  $('.col3 a').click(function(){
    $('#modal').addClass('on')
  });
  $('#modal button').click(function(){
    $('#modal').removeClass('on')
  });

  $('a').focusin(function(){
    $(this).css('font-weight','bold')
  });
  $('a').focusout(function(){
    $(this).css('font-weight','inherit')
  });










































})