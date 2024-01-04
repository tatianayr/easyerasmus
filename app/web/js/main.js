(function ($) {
  "use strict";

  var init = function () {
    var $gallerySlider = $('.blog_gallary_slider'),
      go_top = $('.go-top'),
      $breadcrumb = $('.breadcrumb-inner');

    if ($gallerySlider.length > 0) {
      $($gallerySlider).slick({});
    }

    var $videoAudio = $('video, audio');
    if ($videoAudio.length > 0) {
      $($videoAudio).mediaelementplayer({});
    }

    $("[data-bg-color]").each(function () {
      var bg_color = $(this).data("bg-color");
      $(this).css({
        "background-color": bg_color,
      });
    });

    $("[data-bg-image]").each(function () {
      var bg_image = $(this).data("bg-image");
      $(this).css({
        background: "no-repeat scroll center 0/cover url(" + bg_image + ")",
      });
    });
  }
  
  init();

  
  /* -- Navbar --*/
  
  var navbarFixed = function () {
    var scrollTopValue = 0;
    $(window).scroll(function () {
      var scrollTopVal = $(this).scrollTop();
      var $headerScrollUp = $('.set-sticky');
      if ($headerScrollUp.length > 0) {
        if (scrollTopVal > 200) {
          $($headerScrollUp).addClass("sticky");
          if (scrollTopVal > scrollTopValue) {
            $headerScrollUp.addClass('hide-sticky-header');
          } else {
            $headerScrollUp.removeClass('hide-sticky-header');
          }
          scrollTopValue = scrollTopVal;
        } else {
          $($headerScrollUp).removeClass("sticky");
        }
      }
    });
  };
  navbarFixed();

})(jQuery);
