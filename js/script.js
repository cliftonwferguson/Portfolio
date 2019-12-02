$(document).ready(function() {

  $('#slides').superslides({
  	  animation: 'fade',
  	  play: 5000,
  	  pagination: false
  });

  var typed = new Typed(".typed", {
      strings: ["From Virginia to Japan to web development", "An experienced Junior Developer"],
      typeSpeed: 70,
      loop: true,
      startDelay: 1000,
      showCursor: false, 
  })

  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  });


   $("#navigation li a").click(function(e) {
     e.preventDefault();

     var targetElement = $(this).attr("href");
     var targetPosition = $(targetElement).offset().top;
     $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow")
   });


  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {

    var body = $("body");

    if($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    }
    else {
      body.removeClass("fixedNav");
      body.css("padding-top", 0);
    }

  }



});
