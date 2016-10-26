var pigLatin = function (words){
  // words.toLowerCase();
  var letters = words.split("");
  var vowels = ["a", "e", "i", "o", "u", "y"];
  var firstLetter = letters[0];
  var secondLetter = letters[1];
  var consonants = "";
  console.log(letters)

  if ((words.search(/[^a-zA-Z\s]+/) != -1)) {
    return "Enter only alphebat letters.";
  }else if (vowels.indexOf(firstLetter) != -1){
    if(firstLetter === "y"){
      letters.splice(0, 1);
      letters.push("y");
    }
     letters.push("ay");
     return letters.join("");
   } else if (firstLetter === "s" && secondLetter === "q"){
     letters.splice(0, 2);
     letters.push("squay");
     return letters.join("");
   }else if (firstLetter === "q"){
     letters.splice(0, 2);
     letters.push("quay");
     return letters.join("");
     console.log("q!!!!", letters);
   }else {
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
