  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });


//header scroll change
$(window).scroll(function() {
  if($(this).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  } else {
    $('#header').removeClass('header-scrolled');
  }
});

if($(window).scrollTop() > 100) {
  $('#header').addClass('header-scrolled');
}


//ham burger menu icon toggle
function myFunction(x) {
  x.classList.toggle("change");
  const navMenu = document.querySelector('.options');
  $(".nav-menu ul").slideToggle(500);
  $(".nav-menu ul ul").css("display", "none");
}

$(function() {
  $('.options > ul > li').hover(function(){
    $('ul > ul').slideUp();
    $(this).children('ul.submenu').stop().slideToggle(500);
  })
})

// $('ul li').click(function(){
//   $('ul > ul').slideUp();
//   $(this).find('ul').slideToggle();
// })



//hero image slider
$('.carousel').carousel({
  interval: 6000,
  pause: false
});


//clients carousel
$(document).ready(function(){
  $('.content-client').owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    lazyLoad: true,
    navText: ['<i class="arrow left"></i>', '<i class="arrow right"></i>'],
    responsive:{
        0:{
            items:1
        },
        576:{
            items: 2
        },
        768:{
          items: 4
        },
        1000:{
            items:6
        }
    }
})
});


//back to top button
$(window).scroll(function(){
  if($(this).scrollTop() > 100) {
    $('#topScrollBtn').fadeIn('slow');
  } else{
    $('#topScrollBtn').fadeOut('slow');
  }
});

$('#topScrollBtn').click(function(){
  $('html, body').animate({
    scrollTop: 0
  }, 1000, 'easeInOutExpo');
  return false;
});


// The syntax:- $fn.scrollspeed(step, speed, easing) 
// jQuery.scrollspeed(100,800); 

// AOS initialisation
function aos_init() {
	AOS.init({
		duration: 1000,
		once: true
	});
}
$(window).on('load', function(){
	aos_init();
})(jQuery);