$(window).on("scroll", function() {
    var scrollPos = $(window).scrollTop();
    if (scrollPos <= 0) {
        $(".navbar").css("top", "-100px");        
    } else {
        $(".navbar").css("top", "0");
    }
});
$(".fa-desktop").on("click", function(){
    $("html,body").animate({
        scrollTop: $(".jumbotron").offset().top},
        "slow");
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
        scrollTop: $(".container-3").offset().top},
        "slow");
});

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyA_qj_8VlmCwgYRlTV4HPjgPMEfvEXSdec",
    authDomain: "portfolio-e91f5.firebaseapp.com",
    databaseURL: "https://portfolio-e91f5.firebaseio.com",
    projectId: "portfolio-e91f5",
    storageBucket: "portfolio-e91f5.appspot.com",
    messagingSenderId: "223461393393",
    appId: "1:223461393393:web:4b53759d3e570161aaba50"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  var database = firebase.database();
  
$(function() {
    $(".visitor").validate({
      rules: {
        name: "required",
        email: {
          required: true,
          email: true
        },
        message: "required",
      },
      // Specify validation error messages
      messages: {
        name: "Please enter your firstname",
        email: "Please enter a valid email address",
        message: "Please enter your message"    
      },
      submitHandler: function(form) {
        var name = $("#name").val();
        var email  = $("#email").val();
        var comment = $("#message").val();
        console.log(name);
        console.log(email);
        console.log(comment);
    
        var newCall = {
          name: name,
          email: email,
          message: comment, 
        }
        database.ref().push(newCall);
        $("#name").val("");
        $("#email").val("");
        $("#message").val("");
      }
    });
});

    