$(document).ready(function(){
  var features = [{
    icon: "#discover-icon",
    info: "#discover"
  }, {
    icon: "#friends-icon",
    info: "#friends"
  }, {
    icon: "#planning-icon",
    info: "#planning"
  }], right_arrow = $(".next-icon-arrow"), left_arrow = $("#prev-icon-arrow"),
  nextFeature = function(){
    return function(){
      var current_icon = $(document.getElementsByClassName("icon-active"))
      var current_image = $(document.getElementsByClassName("image-active"))
      if(current_icon[0].id == "planning-icon"){
        current_icon.removeClass("icon-active animated infinite pulse");
        $("#discover-icon").addClass("icon-active animated infinite pulse");
        current_image.removeClass("image-active");
        $("#discover").addClass("image-active");
      }else{
        current_icon.removeClass("icon-active animated infinite pulse").next(".welcome-icons").addClass("icon-active animated infinite pulse");
        current_image.removeClass("image-active").next(".welcome-images").addClass("image-active");
      }
    };
  },
  showfeature = function(feature){
    return function(){
      $("img").removeClass("icon-active animated infinite pulse");
      $(".info > div").removeClass("image-active");
      $(feature.icon).addClass("icon-active animated infinite pulse");
      $(feature.info).addClass("image-active");
    };
  },
  addAnimation = function(feature){
    $(feature.icon).addClass("icon-active animated infinite pulse");
    $(feature.info).addClass("image-active");
  },
  removeAnimation = function(feature){
    $(feature.icon).removeClass("icon-active animated infinite pulse");
    $(feature.info).removeClass("image-active");
  };

  features.forEach(function(feature){
    var $el = $(feature.icon);
    $el.click(showfeature(feature));
  });

  right_arrow.click(nextFeature());
  
})