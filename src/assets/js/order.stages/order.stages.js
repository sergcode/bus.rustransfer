function stageOrder() {

  var $elem = $('.how-make-order .how-make-order__parent .how-make-order__wrapper-item');

  setInterval(function () {

    $elem.each(function () {

      if($(this).hasClass('old')) {

        var elemIndex = $(this).index();

        $(this).removeClass('old');

        if(elemIndex!==3) {

          $elem.eq(elemIndex+1).addClass('active old');

        }

        console.log(elemIndex);

        return false;

      }

    });


  }, 2500);


  if (window.innerWidth > 1024) {
    setInterval(function () {
      var $car = $('.how-make-order .how-make-order__progress .how-make-order__car-wrapper');

      $car.animate({left: 80 + '%'}, 9000, "linear")
    })
  }

}


$(document).ready(function(){
  var $element = $('#how-make-order');
  let counter = 0;
  $(window).scroll(function() {
    var scroll = $(window).scrollTop() + $(window).height();
    //Если скролл до конца елемента
    var offset = $element.offset().top + $element.height();
    //Если скролл до начала елемента
    // var offset = $element.offset().top;

    if (scroll > offset && counter === 0) {
      stageOrder();
      counter = 1;
    }
  });

});

