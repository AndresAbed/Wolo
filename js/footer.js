$(document).ready(function(){

  var makeTransition = function (isBackground) {
    return "color .4s ease-in-out";
  };

  var makeBackgroundTransition = function() {
    return "background-"+makeTransition();
  };

  var resetFooter = function(){
    $("#footer").css({
      "background-color":"#04d0ff",
      "transition":makeBackgroundTransition()
    })
    $(".social i").css({
        "color": "#fff",
        "transition": makeTransition(),
      })
    $(".social-text").text('Follow us in social media')
    $(".social-text").css({
      "color":"#fff",
      "transition":makeTransition(),
    })
    var $copy = $(".copyright");
    $copy.css({
      "background-color":"#04d0ff", 
      "transition":makeBackgroundTransition()
    })
    $copy.find(".container").css({
      "color":"#fff",
      "border-color": "#fff",
      "transition":makeTransition()
    })
  };

  var makeStyle = function(network){
    return function () {
      $("#footer").css({
        "background-color": network.color, 
        "transition": makeBackgroundTransition()
      })
      $(".social i").css({
        "color": "rgb(169, 168, 168)",
        "transition": makeTransition()
      })
      $(".social i.fa-"+network.name).css({
        "color": "#fff",
        "transition": makeTransition()
      })
      $(".social-text")
        .text(network.text)
        .css({
          "color": "#fff",
          "transition":makeTransition()
        });
      var $copy = $(".copyright");
      $copy.css({
        "background-color": network.color, 
        "transition":makeBackgroundTransition()
      })
      $copy.find(".container").css({
        "color": "#fff",
        "border-color": "rgba(255,255,255,.6)",
        "transition":makeTransition()
      })
    };
  };

  var networks = [{
    name: "twitter",
    color: "#4099ff",
    text: "Follow us on Twitter"
  }, {
     name: "instagram",
     color: "#3f729b",
     text: "Take a look to our Instagram photos"
  }, {
    name: "facebook", 
    color: "rgb(59,89,152)",
    text: 'Follow us on Facebook'
  }, {
    name: "google-plus",
    color: "rgb(211, 72, 54)",
    text: 'Follow us on Google+'
  }];

  networks.forEach(function (network) {
    var $el = $(".social i.fa-"+network.name);
    $el.mouseover(makeStyle(network));
    $el.mouseout(resetFooter);
  });
})