var pigLatin = function (words){
  var letters = words.split("");
  var vowels = ["a", "e", "i", "o", "u"];
  var firstletter = letters[0];
  var consonants = "";
  console.log(letters)

  if (words.search(/[^a-zA-Z\s]+/) != -1) {
    return "Enter only alphebat letters.";
  }else if (vowels.indexOf(firstletter) != -1){
     letters.push("ay");
     return letters.join("");
  } else {
    //regular consonants
      for (var i=0; i < letters.length; i++){
          if (vowels.indexOf(letters[i]) == -1){
            //collect consonants
            consonants += letters[i];

          }else {
            break;
          }

      }
      //remove consonants from letters array
      //remove letters from zero position to length of consonants
      var removedLetters = letters.splice(0, consonants.length);
      //append letters with 'ay' to letters array
      letters.push(consonants + "ay");
      return letters.join("");
      // console.log(result);
      // console.log(consonants, " ", removedLetters, " ", letters);
    }
  }


$(document).ready(function(){

    $("form").submit(function (event){
      var input = $("#input").val();
      console.log(pigLatin(input))
      $(".output").text(pigLatin(input));
      event.preventDefault();
    });

});
