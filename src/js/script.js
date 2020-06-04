$('.review-slider').slick({
  arrows: true,
  centerPadding: '60px',
  infinite: true,
  slidesToShow: 3,
  centerMode: true,
  responsive: [{
      breakpoint: 768,
      settings: {
        variableWidth: false,
        arrows: true,
        centerMode: true,
        centerPadding: '25%',
        infinite: true,
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 500,
      settings: {
        arrows: true,
        infinite: false,
        centerPadding: '40px',
        slidesToShow: 1,

      }
    }
  ]
});
