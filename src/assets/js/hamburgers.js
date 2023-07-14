var forEach = function (t, o, r) {
  if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
};
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function (hamburger) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("is-active");
    }, false);
  });
}

$(document).ready(function () {


  $('.hamburger').click(function () {

    $('.bg__menu').toggleClass('active');
    $('html').toggleClass('modal-open');
    $('.header').toggleClass('width');
    $('.nav-menu__collapse').toggleClass('open');
    $('.main, .footer').toggleClass('show')

  });


  $('.bg__menu').on('click', function () {

    $(this).toggleClass('active');
    $('.hamburger').removeClass('is-active');
    $('html').removeClass('modal-open');
    $('.header').toggleClass('width');
    $('.nav-menu__collapse').toggleClass('open');
    $('.main, .footer').toggleClass('show')

  });

});


function activeMixinMenu() {

  var $elem = $('#magicLine li a');

  $elem.click(function () {
    var bgMenu = $('.bg__menu');
    var hamburger = $('.hamburger');
    var htmlLand = $('html');
    var menuNavbar = $('.nav-menu__collapse');
    var widthHeader = $('.header').toggleClass('width');
    var activeMain = $('.main, .footer').toggleClass('show');
    $elem.each(function () {
      $(this).removeClass('active');
      $(bgMenu).removeClass('active');
      $(hamburger).removeClass('is-active');
      $(htmlLand).removeClass('modal-open');
      $(menuNavbar).removeClass('open');
      $(widthHeader).removeClass('width');
      $(activeMain).removeClass('show');

    });

    $(this).addClass('active');

  })

}

$(document).ready(function () {
  activeMixinMenu();
});
