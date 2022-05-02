# project-decoder-ring
thinkful assessment

This project creates 3 JavaScript functions that allow a user to encode and decode phrases or words, it is a capstone project.

The three ways to encode and decode are Caesar which is a simple shift code, where the function is called with a string to be encoded or decoded and a number for the shift as the parameters; Polybius, which is called with a string and an optional boolean with a default value set to true which determines if the string is to be encoded (true) or decoded (false). Using a table to determine the value of each letter the string is evaluated; The substitution function accepts two strings as parameters, the first is the message and the second is 26 characters that represent the alphabet. The function performs simple substitution on the message using the provided alphabet. 

The functions each ensure that proper arguments are passed in. 

This was written using test driven development and so there are tests for each aspect.

This project uses JavaScript, Mocha, and Chai. 
