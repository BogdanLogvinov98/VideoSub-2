
$(function () {  // $(document).ready shorthand
    $('animation').fadeIn('slow');
  });

  $(document).ready(function () {
    $('.title-hide').each(function () {
    /* If the object is completely visible in the window, fade it it */
      $(this).animate({ 'opacity': '1' }, 700);
    
    $('.hide').each(function () {

      var bottom_of_object = $(this).position().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ 'opacity': '1', 'top': '0' }, 700);
      }
    });
  });

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.hide').each(function () {

      var bottom_of_object = $(this).position().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ 'opacity': '1', 'top': '0' }, 700);
      }
    });

  });

});