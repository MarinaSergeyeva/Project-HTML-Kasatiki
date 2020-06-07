$(document).ready(function () {
  $('.review-list').slick({
    arrows: true,
    slidesToShow: 3,
    centerPadding: '20px',
    centerMode: false,
    nextArrow: '<button type="button" class="slick-next">&#8594;</button>',
    prevArrow: '<button type="button" class="slick-prev">&#8592;</button>',
    responsive: [

      {
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
        breakpoint: 1000,
        settings: {
          variablesWidth: false,
          arrows: true,
          centerMode: true,
          centerPadding: '22%',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          centerPadding: '40px',
          slidesToShow: 1,
        }
      }
    ]
  });
});
