$(window).on("scroll", function() {
    var scrollPos = $(window).scrollTop();
    if (scrollPos <= 0) {
        $(".navbar").css("top", "-100px");
        
    } else {
        $(".navbar").css("top", "0");
    }
});

$(".about").on("click", function(){
    $("html,body").animate({
        scrollTop: $(".container-1").offset().top},
        "slow");
  });
  $(".projects").on("click", function(){
    $("html,body").animate({
        scrollTop: $(".container-2").offset().top},
        "slow");
  });
  $(".contact").on("click", function(){
    $("html,body").animate({
        scrollTop: $(".row-contact").offset().top},
        "slow");
  });