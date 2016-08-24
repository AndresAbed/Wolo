$(document).ready(function(){
    $(".scroll").click(function() {
      $('html,body').animate({
        scrollTop: $("#welcome").offset().top-70},1000);
    });

    $(".vision-item").click(function() {
      $('html,body').animate({scrollTop: $("#vision").offset().top},1000);
    });

    $(".welcome-item").click(function() {
      $('html,body').animate({
        scrollTop: $("#welcome").offset().top-70},1000);
    });

    $(".discover-item").click(function() {
      $('html,body').animate({
        scrollTop: $("#take-a-look").offset().top-70},1000);
    });

    $(".community-item").click(function() {
      $('html,body').animate({
        scrollTop: $("#community").offset().top-70},1000);
    });

    $('#carousel').carousel({
      interval: 5000
    });


    $(window).scroll(function() {
      var position = $(this).scrollTop();
      var vision = $("#vision").offset().top;
      if (position >= vision) {
        $(".navbar-right a").removeClass("active");
        $(".vision-item").addClass("active");
      }
      var welcome = $("#welcome").offset().top-85;
      if (position >= welcome) {
        $(".navbar-right a").removeClass("active");
        $(".welcome-item").addClass("active");
      }
      var discover = $("#take-a-look").offset().top-85;
      if (position >= discover) {
        $(".navbar-right a").removeClass("active");
        $(".discover-item").addClass("active");
      }
      var community = $("#community").offset().top-85;
      if (position >= community) {
        $(".navbar-right a").removeClass("active");
        $(".community-item").addClass("active");
      }
    });

    var Expand = (function() {
      var tile = $('.strips__strip');
      var tileLinkTop = $('.strips__strip > .strip__content_top');
      var tileTextTop = tileLinkTop.find('.strip__inner-text');
      var tileLinkBottom = $('.strips__strip > .strip__content_bottom');
      var filterTop = $('.strips__strip > .strip__content_top > .strips-descriptions-filter');
      var filterBottom = $('.strips__strip > .strip__content_bottom > .strips-descriptions-filter');
      var tileTextBottom = tileLinkBottom.find('.strip__inner-text');
      var expanded  = false;
      var infoTop = function() {
        var tile = $(this).parent();
        if (!expanded) {
          tile.addClass('strips__strip--expanded');
          tileTextTop.css('transition', 'all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)');
          filterTop.css({'background-color': '#000', 'opacity': '0.5'});
          expanded = true;
        }else{
          tile.removeClass('strips__strip--expanded');
          tileTextTop.css('transition', 'all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)');
          filterTop.css('opacity', '0');
          expanded = false;
        }
      };
      var infoBottom = function() {
        var tile = $(this).parent();
        if (!expanded) {
          tile.addClass('strips__strip--expanded');
          tileTextBottom.css('transition', 'all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)');
          filterBottom.css({'background-color': '#000', 'opacity': '0.5'});
          expanded = true;
        }else{
          tile.removeClass('strips__strip--expanded');
          tileTextBottom.css('transition', 'all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)');
          filterBottom.css('opacity', '0');
          expanded = false;
        }
      };
      var bindActions = function() {
        tileLinkTop.on('click', infoTop);
        tileLinkBottom.on('click', infoBottom);
      };

      var init = function() {
        bindActions();
      };

      return {
        init: init
      };
    }());
    Expand.init();

    $("#ready").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      $("#code_email").focus();
    });
    $("#get-code").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      $('#sign-up-modal').modal('hide');
      $("#code_email").focus();
    });
})
