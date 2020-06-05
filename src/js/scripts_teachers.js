$(document).ready(function () {
  $('.teachers-list').slick({
    arrows: true,
    slidesToShow: 3,
    centerPadding: '20px',
    nextArrow: '<button type="button" class="slick-next slick-next__teachers">&#8594;</button>',
    prevArrow: '<button type="button" class="slick-prev slick-prev__teachers">&#8592;</button>',
    responsive: [{
        breakpoint: 1439,
        settings: {
          variablesWidth: false,
          arrows: true,
          centerMode: true,
          centerPadding: '25%',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  });
  $('.teachers-list').on('setPosition', function (event, slick) {
    $(slick.$slides)
      .height('auto')
      .css('height', $(slick.$slideTrack).height() + 'px');
  });
});
