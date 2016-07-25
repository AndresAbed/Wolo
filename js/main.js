$(document).ready(function(){
  $(".scroll").click(function() {
    $('html,body').animate({
      scrollTop: $("#welcome").offset().top-85},1000);

  });

  $(".vision-item").click(function() {
    $('html,body').animate({scrollTop: $("#vision").offset().top},1000);
  });

  $(".welcome-item").click(function() {
    $('html,body').animate({
      scrollTop: $("#welcome").offset().top-85},1000);
  });

  $(".discover-item").click(function() {
    $('html,body').animate({
      scrollTop: $("#discover").offset().top-85},1000);
  });

  $(".community-item").click(function() {
    $('html,body').animate({
      scrollTop: $("#community").offset().top-85},1000);
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
    var discover = $("#discover").offset().top-85;
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
})
