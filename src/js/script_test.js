$(document).ready(function () {
  var owl = $('.test-list');
  owl.owlCarousel({
    items: 1
  });

  $('.btn-next').click(function () {
    owl.trigger('next.owl.carousel');
  })


  // Go to the previous item
  $('.btn-prev').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
  });
});
