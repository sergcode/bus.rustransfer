function markerItem(elem) {
  if (window.innerWidth > 991.98) {

    elem.append("<li class='magic-line--js'></li>");
    var $magicLine = $(".magic-line--js");

    $magicLine
        .width($(".current_page_item").width())
        .css("left", $(".current_page_item a").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());

    hoverElem($('#magicLine li a'), $magicLine);

  }

}

function hoverElem(elem, magicLine) {
  if (window.innerWidth > 991.98) {

    elem.hover(function () {
      var $el = $(this);
      var leftPos = $el.position().left;
      var newWidth = $el.parent().width();
      magicLine.stop().animate({
        left: leftPos,
        width: newWidth
      });

      elem.each(function () {
        $(".magic-line--js").addClass('active');
      });

    }, function () {
      magicLine.stop().animate({
        left: magicLine.data("origLeft"),
        width: magicLine.data("origWidth")
      });
      $(".magic-line--js").removeClass('active');
    });

  }
}

$(document).ready(function () {
  markerItem($('#magicLine'));
});
