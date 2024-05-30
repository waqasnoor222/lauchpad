$(document).on('ready', function() {

    $(".vertical-center-2").slick({
      dots: true,
      vertical: true,
      centerMode: true,
      slidesToShow: 2,
      slidesToScroll: 2
    });
    $(".vertical-center").slick({
      dots: true,
      vertical: true,
      centerMode: true,
    });
    $(".vertical").slick({
      dots: true,
      vertical: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });
    $(".regular").slick({
      dots: true,
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }
      ]
    });
    $(".slider-cat").slick({
      dots: true,
      infinite: true,
      slidesToShow: 1.2,
      slidesToScroll: 1,
      infinite: false,
      arrows: false
    });
    $(".center").slick({
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 5,
      slidesToScroll: 3
    });
    $(".variable").slick({
      dots: true,
      infinite: true,
      variableWidth: true
    });
    $(".lazy").slick({
      lazyLoad: 'ondemand', // ondemand progressive anticipated
      infinite: true
    });
  });