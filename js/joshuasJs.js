



// var iso = new Isotope('.grid', {
//   itemSelector: '.element-item',
//   layoutMode: 'fitRows'
// });





// function someApi() {

//   document.getElementById('pic').prepend(`<div class="portfolio-item">
//               <div class="hover-bg"> <a href="img/portfolio/02-large.jpg" title="Project Title" data-fancybox="gallery">
//                   <div class="hover-text">
//                     <div class="overlay-caption">
//                       <div class="overlay-content">
//                         <h4>Project Name</h4>
//                       </div>
//                     </div>
//                   </div>`)
// };




// document.getElementById('api').addEventListener("click", someApi);


(function () {
  //Closure Bitches:) Watch me work
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


  // Portfolio isotope filter
  $(window).on('load', function () {
    var $container = $('.grid-items');
    $container.isotope({
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    $('.cat a').click(function () {
      $('.cat .active').removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    });

  });
  // Init fancyBox
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




}(jQuery));