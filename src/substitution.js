// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function encodeString(input, alphabet){
    let result = "";
    //loop through the input to find the character in the alphabet
    for(let i=0; i<input.length; i++){
      //maintain spaces
      if(input.charAt(i)===" "){
        result += " "
      }else {
        //loop through the alphabet to find the match for the input
        for(let j=0; j<26; j++){
          //convert character to ascii values
          const charVal = j+97;
          if( input.charCodeAt(i) === charVal){
            result += alphabet.charAt(j);
            //end this forLoop
            j+=26;
           }
         }
        }
    }
    return result
  }

  function decodeString(input, alphabet){
    let result = "";
    //loop through the input
    for(let i=0; i<input.length; i++){
      //maintain spaces
      if(input.charAt(i)===" "){
        result += " "
      }else {
        //loop through the alphabet 
        for(let j=0; j<26; j++){
          if( input.charAt(i) === alphabet.charAt(j)){
            //find letter based on position in the alphabet string and ascii values
            const charVal = j+97;
            const newLetter = String.fromCharCode(charVal);
            result += newLetter;
            //end this forLoop
            j+=26;
          }
        }
      }
    }
    return result;
  }

  function dupeChar(alphabet){
    for(let i=0; i<26; i++){
      for(let j=0; j<26; j++){
        if(alphabet.charAt(i)===alphabet.charAt(j)){
          if(!(i===j)) return true;
        } 
      }
    }
    return false;
  }

  function substitution(input, alphabet, encode = true) {
    //ensure the case doesn't affect the answer
    input = input.toLowerCase()
    //return false if there is no alphabet argument
    if(!alphabet){return false}
    //ensure the alphabet parameter is 26 characters long
    else if(!(alphabet.length === 26)){return false}
    //ensure there are no duplicate characters in the alphabet
    else if(dupeChar(alphabet)){return false} 
    //encode, if encode parameter is true
    else if(encode) {return encodeString(input, alphabet);}
    //decode, if encode paramet is false
    else {return decodeString(input, alphabet)}
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
