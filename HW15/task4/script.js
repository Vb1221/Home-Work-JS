$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3, 
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 900, 
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 520, 
        settings: {
          slidesToShow: 1 
        }
      }
    ]
  });

});