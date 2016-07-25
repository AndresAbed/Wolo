$(document).ready(function(){
  var features = [{
    icon: "#discover-icon",
    info: ".discover"
  }, {
    icon: "#friends-icon",
    info: ".friends"
  }, {
    icon: "#planning-icon",
    info: ".planning"
  }], interval;

  var showfeature = function(feature){
    return function(){
      $("img").removeClass("active animated infinite pulse");
      $(".info > div").removeClass("details-active");
      clearInterval(interval);
      $(feature.icon).addClass("active animated infinite pulse");
      $(feature.info).addClass("details-active");
    };
  };

  var addAnimation = function(feature){
    $(feature.icon).addClass("active animated infinite pulse");
    $(feature.info).addClass("details-active");
  }

  var removeAnimation = function(feature){
    $(feature.icon).removeClass("active animated infinite pulse");
    $(feature.info).removeClass("details-active");
  }

  var startAnimation = function(features){
    var i = 1;
    addAnimation(features[0]);
    setTimeout(function(){
      removeAnimation(features[0]);
    }, 7000);
    interval = setInterval(function() {
      addAnimation(features[i]);
      setTimeout(function(){
        removeAnimation(features[i++]);
        if (i == features.length) {i = 0;};
      }, 7000);
    }, 7100);
  };

  features.forEach(function(feature){
    var $el = $(feature.icon);
    $el.click(showfeature(feature));
  });

  startAnimation(features);
})    