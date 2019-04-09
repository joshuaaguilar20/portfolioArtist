


(function () {
  //Closure Page Scroll Function 
  $('a.page-scroll').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 900);
        return false;
      }
    }
  });



  // Init fancyBox
 window.onload = function (e) {
    $().fancybox({
      selector: '.element-item:visible > a'
    })

    // Init Isotope
    var $grid = $('.grid').isotope({
      // options
    });

    // Filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
      $grid.isotope({ filter: $(this).attr('data-filter') });
    });

  };




}(jQuery));
