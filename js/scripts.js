


$(document).ready(function(){

    $("form").submit(function (event){
      var input = $("#input").val();
      console.log(pigLatin(input));
    
      event.preventDefault();
    });

});
