// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  
  function encodeString(input){
    //set each number value for each letter
    let result ="";
    for(let i=0; i<input.length; i++){
      switch (input.charAt(i)){
        case "a":
          result += "11";
          break;
        case "b":
            result += "21";
            break;
          case "c":
            result += "31";
            break;
          case "d":
            result += "41";
            break;
          case "e":
            result += "51";
            break;
          case "f":
            result += "12";
            break;
          case "g":
            result += "22";
            break;
          case "h":
            result += "32";
            break;
          case "i":
            result += "42";
            break;
          case"j":
            result += "42";
            break;
          case "k":
            result += "52";
            break;
          case "l":
            result += "13";
            break;
          case "m":
            result += "23";
            break;
          case "n":
            result += "33";
            break;
          case "o":
            result += "43";
            break;
          case "p":
            result += "53";
            break;
          case "q":
            result += "14";
            break;
          case "r":
            result += "24";
            break;
          case "s":
            result += "34";
            break;
          case "t":
            result += "44";
            break;
          case "u":
            result += "54";
            break;
          case "v":
            result += "15";
            break;
          case "w":
            result += "25";
            break;
          case "x":
            result += "35";
            break;
          case "y":
            result += "45";
            break;
          case "z":
            result += "55";
            break;
          //maintain spaces
          case " ":
            result += " ";
            break;
  
      }
    }
    return result;
    
  }

  function decodeString(input){
    let result ="";
    for(let i=0; i<input.length; ){
      //maintain spaces
      if(input.charAt(i) === " ") {
        result+=" ";
        i++;
      }else{
        //set each letter to number letter
        switch (input.substr(i, 2)){
          case "11":
            result += "a";
            break;
          case "21":
              result += "b";
              break;
            case "31":
              result += "c";
              break;
            case "41":
              result += "d";
              break;
            case "51":
              result += "e";
              break;
            case "12":
              result += "f";
              break;
            case "22":
              result += "g";
              break;
            case "32":
              result += "h";
              break;
            case "42":
              result += "(i/j)";
              break;
            case "52":
              result += "k";
              break;
            case "13":
              result += "l";
              break;
            case "23":
              result += "m";
              break;
            case "33":
              result += "n";
              break;
            case "43":
              result += "o";
              break;
            case "53":
              result += "p";
              break;
            case "14":
              result += "q";
              break;
            case "24":
              result += "r";
              break;
            case "34":
              result += "s";
              break;
            case "44":
              result += "t";
              break;
            case "54":
              result += "u";
              break;
            case "15":
              result += "v";
              break;
            case "25":
              result += "w";
              break;
            case "35":
              result += "x";
              break;
            case "45":
              result += "y";
              break;
            case "55":
              result += "z";
              break;  
        }
        i+=2;
      }
    }
    return result;

  }

  //make sure there is an even number of numbers in the input
  function isEven(input){
    let numSpaces =0;
    for(let i=0; i<input.length; i++){
      if(input.charAt(i) === " ") numSpaces++;
    }
    const lengthNoSpaces = input.length-numSpaces;
    return lengthNoSpaces%2 === 0;
    

  }

  function polybius(input, encode = true) {
    input = input.toLowerCase();
    if(encode) {
      return encodeString(input);
    } else{
      if(!isEven(input)){return false} else{
      return decodeString(input)}}
    
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
