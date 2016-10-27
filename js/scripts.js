var pigLatin = function (words){
  // words.toLowerCase();
  var letters = words.split("");
  var vowels = ["a", "e", "i", "o", "u", "y"];
  var endPunctuation = ["!", "?", "."];
  var firstLetter = letters[0];
  var secondLetter = letters[1];
  var consonants = "";
  var endPunctuationMark = "";

  //remove punctuation

  if (endPunctuation.indexOf(letters[letters.length-1])!= -1){
    endPunctuationMark = letters[letters.length-1];
    letters.splice(letters.length-1, 1);
    console.log("end punctuation", letters)
  }

  if ((words.search(/[^a-zA-Z\.\!\?\s]+/) != -1)) {
    return false;
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
      //allow ending punctuation
      //remove punction and place at the ending

      //remove consonants from letters array
      //remove letters from zero position to length of consonants
      var removedLetters = letters.splice(0, consonants.length);
      //append letters with 'ay' to letters array
      letters.push(consonants + "ay");
      translatedSentence = letters.join("");
      return translatedSentence + endPunctuationMark;
      // console.log(result);
      // console.log(consonants, " ", removedLetters, " ", letters);
    }
  }

  var translateSentence = function (sentence){
  // take sentence apply piglatin function to each word
    var translation = [];
    var words = sentence.split(" ");
    console.log(words);

    words.forEach(function (word){
      translation.push(pigLatin(word));

    });
    console.log(translation);
    return translation.join(" ");


  }


$(document).ready(function(){

    $("form").submit(function (event){
      var input = $("#input").val();
      console.log(pigLatin(input));
      if (pigLatin(input) != false){
        $(".output").text(translateSentence(input));
      }else{
        $(".output").text("Please do not enter numbers or weird punctuation.")
      }

      event.preventDefault();
    });

});
