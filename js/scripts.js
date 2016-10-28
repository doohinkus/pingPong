
var isAcceptableInteger = function (number){
  var input = parseInt(number);
  if (typeof(input) === "number") {
    if (input >= 1 && input <= 3999){
      return true;
    } else {
        return false;
      }
  } else {
    return false;
    }
}

var count = function (number){
  var output = [];
  for (var i = 1; i <= number; i++){
    if (isDivisiblebyThree(i)){
      output.push("ping");
    }else {
      output.push(i);
    }

  }
  return output;
}

var isDivisiblebyThree = function (number){
  if (number % 3 == 0){
    return true;
  }
}

$(document).ready(function(){

    $("form").submit(function (event){
      var input = $("#input").val();
      $(".output").text("");

      if (isAcceptableInteger(input)){
        console.log(count (input));
      }else {
        $(".output").text("Please enter a number between 1 and 3999.");
      }


      event.preventDefault();
    });

});
