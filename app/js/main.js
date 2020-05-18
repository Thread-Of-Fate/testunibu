$( function() {
  $( "#accordion" ).accordion();
  $('.menu-btn').click(function(){
  	$('.header-nav__list, .menu-btn').toggleClass('active');
  });
});