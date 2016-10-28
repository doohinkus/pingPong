
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
    output.push(i);
  }
  return output;
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
