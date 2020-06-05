$('.teachers-list').slick({
  arrows: true,
  slidesToShow: 3,
  centerPadding: '20px',
  infinite: true,
  nextArrow: '<button type="button" class="slick-next">&#8594;</button>',
  prevArrow: '<button type="button" class="slick-prev">&#8592;</button>',
  responsive: [{
      breakpoint: 1439,
      settings: {
        variablesWidth: false,
        arrows: true,
        centerMode: true,
        centerPadding: '25%',
        infinite: true,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: true,
        infinite: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
})


// .on('setPosition', function (event, slick) {
//   slick.$slides.css('height', slick.$slideTrack.height() + 'px');
//  });
