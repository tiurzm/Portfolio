$(window).on("scroll", function() {
    var scrollPos = $(window).scrollTop();
    if (scrollPos <= 0) {
        $(".navbar").css("top", "-100px");
        
    } else {
        $(".navbar").css("top", "0");
    }
});