let closed = true;
$(".open").click(function () {
  if (closed == true) {
    $(this).animate({ left: "270px" }, 500);
    $(".side-bar").animate({ left: "0px" }, 500);
    closed = false;
    $(".open-close").text("Close");
  } else if (closed == false) {
    $(".open").animate({ left: "20px" }, 500);
    $(".side-bar").animate({ left: "-250px" }, 500);
    closed = true;
    $(".open-close").text("Open");
  }
});
$(".close-side").click(function () {
  $(".open").animate({ left: "20px" }, 500);
  $(".side-bar").animate({ left: "-250px" }, 500);
  closed = true;
  $(".open-close").text("Open");
});

$(".one").click(function () {
  $(".one-info").slideToggle();
  $(".two-info").slideUp();
  $(".three-info").slideUp();
  $(".four-info").slideUp();
});
$(".two").click(function () {
  $(".two-info").slideToggle();
  $(".one-info").slideUp();
  $(".three-info").slideUp();
  $(".four-info").slideUp();
});
$(".three").click(function () {
  $(".three-info").slideToggle();
  $(".one-info").slideUp();
  $(".two-info").slideUp();
  $(".four-info").slideUp();
});
$(".four").click(function () {
  $(".four-info").slideToggle();
  $(".one-info").slideUp();
  $(".three-info").slideUp();
  $(".two-info").slideUp();
});

$(function makeTimer() {

        //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
            var endTime = new Date("29 April 2030 9:56:00 GMT+01:00");			
                endTime = (Date.parse(endTime) / 1000);
    
                var now = new Date();
                now = (Date.parse(now) / 1000);
    
                var timeLeft = endTime - now;
    
                var days = Math.floor(timeLeft / 86400); 
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
      
                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }
    
                $("#days").html(days + "<span>Days</span>");
                $("#hours").html(hours + "<span>Hours</span>");
                $("#minutes").html(minutes + "<span>Minutes</span>");
                $("#seconds").html(seconds + "<span>Seconds</span>");		
    
        setInterval(function() { makeTimer(); }, 1000);
})


$(".message").keyup(function(){
  console.log($(this).val().length)
  $(".count").text($(this).val().length < 100 ? `${100-$(this).val().length}` : `your available character finished` )
  if($(this).val().length > 100){
    $(".sendM").prop("disabled",true)
  }else{
    $(".sendM").prop("disabled",false)
  }
})

$("#home-link").click(function(){
  $('html,body').animate({scrollTop: $("#home").offset().top},1000);
})
$("#duration-link").click(function(){
  $('html,body').animate({scrollTop: $("#duration").offset().top},1000);
})
$("#details-link").click(function(){
  $('html,body').animate({scrollTop: $("#details").offset().top},1000);
})
$("#contact-link").click(function(){
  $('html,body').animate({scrollTop: $("#contact").offset().top},1000);
})

