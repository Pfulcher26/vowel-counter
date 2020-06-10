//Bussiness Logic

//for (let i = 0; i < vowelArray.length -1; i ++) {
// if (vowelArray[i] === "a" || vowelArray[i] === "e" || vowelArray[i] === "i" || vowelArray[i] === "o" || vowelArray[i] === "u")
//}

//UI Logic
$(document).ready(function() {
  $("#vowelForm").submit(function(event) {
    event.preventDefault();
    let vowels = $("input#word").val();
    let lowerCase = vowels.toLowerCase();
    let vowelArray = lowerCase.split('');

    $(".outPut").text(vowelArray);    
  });
});
