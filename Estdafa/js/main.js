$(document).ready(function() {
  // Toggle between prices
  $('.prices-toggle span').on('click',function() {
    $(this).addClass('active').siblings().removeClass('active');
  });

  // Search Field in Header
  $('.search-icon').on('click',function(e) {
    $('.search-field').addClass('open');
    $('.search-field').slideToggle(500);
    e.stopPropagation();
  });

  $(document).on('click',function(e) {
    if (!$(e.target).is('.search-field,.btn-search,.srch-inpt')) {
        $(".search-field").slideUp(500);
    }
});

  $(window).on('scroll',function() {
    if ($(window).scrollTop() > 200) {
      // Make Header Sticky when scrolling
      $('.navbar').addClass('sticky-header');
      // Scroll to top button
      $('.scroll-top').css('opacity','1');
      $('.scroll-top').css('visibility','visible');
    } else {
      // Remove Header Sticky when scrolling to < 200px
      $('.navbar').removeClass('sticky-header');
      // Hide Scroll to top button when scrolling to < 200px
      $('.scroll-top').css('opacity','0');
      $('.scroll-top').css('visibility','hidden');
    }
  });

  // click Scroll to top button 
  $('.scroll-top').on('click',function() {
    $(window).scrollTop(0,0);
  });
});

 // Loader Function
 $(window).on('load',function() {
    $('body').css('overflow','visible');
    $('.loader').addClass('disappear');
});
