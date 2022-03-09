// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function encodeString(input, shift){
    let result = "";
    //loop through input
     for(let i=0; i<input.length; i++){
       //find ascii value
       const charVal = input.charCodeAt(i);
       //maint spaces and symbols
       if(charVal > 122 || charVal < 97){
         result += input.charAt(i);
       }else{
         //shift the ascii value
       let codeVal = charVal + shift;
       //ensure the new character is a letter
       codeVal = adjustToLetter(codeVal);
       result += String.fromCharCode(codeVal);
       }
   }
   return result;
  }

  //wrap the letters at the end and beginning of the alphabet
  function adjustToLetter(codeVal){
    if (codeVal > 122){
      return (codeVal - 26)
     } else if(codeVal < 97){
       return (codeVal + 26)
     } else return codeVal;
  }

  function caesar(input, shift, encode = true) {
    //return false if the shift value is inappropriate
    if(!shift || shift === 0 || shift <-25 || shift > 25) return false;
  input = input.toLowerCase();
  let result = "";
   if(encode){
    return encodeString(input, shift);
   } else {
     const newShift = -shift;
    return encodeString(input, -shift);
  }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
