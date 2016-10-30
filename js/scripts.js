
var isAcceptableInteger = function (number){
  var input = parseInt(number);
  console.log("input: ", input);
  if (!isNaN(input) && (input >= 1 && input <= 3999)) {
    return true;
  }
  return false;

}

var pingPong = function (number){
  var output = [];
  var parsedInput = parseInt(number);
  for (var i = 1; i <= parsedInput; i++){
    if (isDivisibleby3(i)){
      output.push("ping");
    }else if (isDivisibleby5(i)){
      output.push("pong");
    }else if (isDivisibleby3And5(i)){
      output.push("ping-pong");
    }else {
      output.push(i);
    }

  }
  return output;
}

var isDivisibleby3 = function (number){
  if (number % 3 === 0 && !(number % 5 ===0)){
    return true;
  }
}

var isDivisibleby5 = function (number){
  if (number % 5 === 0 && !(number % 3 ===0)){
    return true;
  }
}

var isDivisibleby3And5 = function (number){
  if (number % 3 === 0 && number % 5 ===0){
    return true;
  }
}



//scrolling was adapted from https://css-tricks.com/snippets/jquery/smooth-scrolling/
var linkBehaviors = function (){

  $('a[href*="#"]:not([href="#"])').click(function(event) {
    //hide content then fade it in


        var target = $(this.hash);
        $(".secondaryContent").hide();
        $(target).fadeIn();
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }



      event.preventDefault();
    });
}



$(document).ready(function(){
  linkBehaviors();
  $(".secondaryContent").hide();
  $("#directions").show();


  $("form").submit(function (event){
    var input = $("#input").val();
    $(".error").text("");
    $("ul").empty();
    if (isAcceptableInteger(input)){
      pingPong(input).forEach(function (value){
        if (value === "ping"){
          $("ul").append("<li class='ping shadow'>" + value + "</li>");
        }else if (value === "pong"){
          $("ul").append("<li class='pong shadow'>" + value + "</li>");
        }else if (value === "ping-pong"){
          $("ul").append("<li class='pingPong shadow'>" + value + "</li>");
        }else{$("ul").append("<li>" + value + "</li>");}
      });
    }else {
      $(".error").hide().text("Please enter a number between 1 and 3999.").fadeIn();
    }
    $("ul li").hide();
    $("ul li").each(function(i) {
      $(this).delay(200 * i).fadeIn();
    });

    event.preventDefault();
  });

});
