$(function () {
  'use strict'

  // menu fix==========================================

  var nav = $('.main_menu').offset().top;

  $(window).scroll(function () {

    var src = $(this).scrollTop();

    if (src > nav) {

      $('.main_menu').addClass('menu_fix');

    } else {

      $('.main_menu').removeClass('menu_fix');

    }

  });





  //slider js=========================================== 

  $('.slider_bg').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //slider js=========================================== 




  //counter js=========================================== 
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  //counter js=========================================== 


});