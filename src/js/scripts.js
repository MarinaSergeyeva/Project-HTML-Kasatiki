$('.teachers-list').slick({
    arrows: true,
    slidesToShow: 3,
    centerPadding: '60px',
    infinite: false,
    nextArrow: '<button type="button" class="slick-next">&#8594;</button>',
    prevArrow: '<button type="button" class="slick-prev">&#8592;</button>',
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          infinite: false,
          slidesToShow: 1
         
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          infinite: false,
          slidesToShow: 3
         
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: true,
          infinite: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
