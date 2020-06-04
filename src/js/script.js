$('.review-slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 1,
  responsive: [{
      breakpoint: 1450,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
