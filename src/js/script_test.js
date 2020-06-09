$(document).ready(function () {
  var owl = $('.test-list');
  owl.owlCarousel({
    items: 1
  });

  $('.test-list__next-btn').click(function () {
    owl.trigger('next.owl.carousel');
  })


  // Go to the previous item
  $('.test-list__prev-btn').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
  });
});
