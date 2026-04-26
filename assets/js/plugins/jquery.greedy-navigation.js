/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $vlinks_persist = $vlinks.children().first();
var $vlinks_persist_tail = $vlinks.children("*.persist.tail");
var $hlinks = $('#site-nav .hidden-links');

var breaks = []; // Stores the navbar's widths where it overflows
var collapse_all = $nav.hasClass("masthead__collapse-all"); // Flags whether all the navbar's elements must be hidden when it overflows

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if ($vlinks.width() > availableSpace) {

      // In this case, the navbar width must be pushed just once
      if(collapse_all) {
        breaks.push($vlinks.width());

        // Reduce the spacing between the first element in the navbar and the theme toggle button
        $vlinks_persist.css("padding-right", "0px");
      }

      // In the case that all the navbar's elements must be hidden when it overflows, we want to hide every element independently of the available space
      while ((collapse_all || $vlinks.width() > availableSpace)
              && $vlinks.children("*:not(.persist)").length > 0) {
        // Record the width of the list
        if(!collapse_all) {
          breaks.push($vlinks.width());
        }

        // Move item to the hidden list
        $vlinks.children("*:not(.persist)").last().prependTo($hlinks);
  
        availableSpace = $btn.hasClass("hidden") ? $nav.width() : $nav.width() - $btn.width() - 30;

        // Show the dropdown btn
        $btn.removeClass("hidden");
      }

    // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    while (breaks.length > 0 && availableSpace > breaks[breaks.length - 1]) {
      if(collapse_all) {
        while($hlinks.children().length > 0) {
          // Move item to the visible list
          if ($vlinks_persist_tail.children().length > 0) {
            $hlinks.children().first().insertBefore($vlinks_persist_tail);
          } else {
            $hlinks.children().first().appendTo($vlinks);
          }
        }
      } else {
        // Move the item to the visible list
        if ($vlinks_persist_tail.children().length > 0) {
          $hlinks.children().first().insertBefore($vlinks_persist_tail);
        } else {
          $hlinks.children().first().appendTo($vlinks);
        }
      }
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if (breaks.length < 1) {
      $btn.addClass('hidden');
      $btn.removeClass('close');
      $hlinks.addClass('hidden');

      $vlinks_persist.css("padding-right", "");
    }
  }

  // Keep counter updated
  $btn.attr("count", $hlinks.children().length);

  // update masthead height and the body/sidebar top padding
  var mastheadHeight = $('.masthead').height();
  $('body').css('padding-top', mastheadHeight + 'px');
  if ($(".author__urls-wrapper button").is(":visible")) {
    $(".sidebar").css("padding-top", "");
  } else {
    $(".sidebar").css("padding-top", mastheadHeight + "px");
  }

}

// Window listeners

$(window).on('resize', function () {
  updateNav();
});
screen.orientation.addEventListener("change", function () {
  updateNav();
});

$btn.on('click', function () {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();