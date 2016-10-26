var pigLatin = function (words){
  var letters = words.split("");
  var vowels = ["a", "e", "i", "o", "u"];
  var firstletter = letters[0];
  var shiftedLetters = "";
  var firstConsonants = []
  console.log(letters)

  if (words.search(/[^a-zA-Z\s]+/) != -1) {
    return "Enter only alphebat letters.";
  }else if (vowels.indexOf(firstletter) != -1){
     letters.push("ay");
     return letters.join("");
  } else {
    //--old code---//
    //   for(var i = 0; i <= letters.length-1; i++) {
    //     for(var v = 0; v <= vowels.length-1; v++) {
    //       if (letters[i] === vowels[v]) {
    //        var cluster = letters.slice(0, i).join("");
    //         console.log(cluster, " ")
    //         break
    //       }
    //     }
    //   }
    //
    //--new code -- //
    for (var i=0; i < letters.length; i++){
      if (vowels.indexOf(letters[i]) == -1){
        console.log(letters[i]);
        firstConsonants.shift(letters[i]);
        console.log(firstConsonants)
      }else {
        break;
      }
    };
    }
  };


$(document).ready(function(){

    $("form").submit(function (event){
      var input = $("#input").val();
      console.log(pigLatin(input))

      event.preventDefault();
    });

});
