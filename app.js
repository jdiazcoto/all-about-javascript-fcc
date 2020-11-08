//1. COMMENTS

var number = 5; //in line comment

/*This is a 
A
S
M
U
C
H
A
S
Y
O
U
W
A
N
T
a multiline comment */

//2. DATA TYPES:
//undefined, null, boolean, string, symbol, number and object

//3. VARIABLES
var myName = "Jorge"; //Way number 1

myName = 8; //Changing it dynamically

let ourName = "JfdcDevOps"; //Way number 2

const pi = 3.14; //Variable that can never change it and Way number 3

var a; //Declaring Variable
var b = 2; //Assigning Variables
a = 7; //Assignment
b = a; //Assignment

console.log(a); //Prints to browser console

//MORE ABOUT VARIABLES

//Uniniatilized vars
var a;
var b;
var c;

//Initializing them

a = 5;
b = 10;
c = "I Am a ";

//4. OPERATIONS WITH VARIABLES

a = a + 1; //Or a+=12;
b = b + 5; //Or b*=9;
c = c + " String!"; //Or c+=" String!";

//4. CASE SENSITIVITY ABOUT VARIABLES

//Declarations
var stUdlYCapVar;
var properCamelCase;
var TitleCaseOver;

//Assignments
STUDLYCAPVAR = 10; //Different var than declared
PRoperCAmelCase = "A String"; //Different var than declared
titleCaSEOVER = 9000; //Different var than declared

//Correct Declaration
var studlyCapVar;
var propoerCamelCase;
var titleCaseOver;

//Now use them correctly
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//5. ADDING NUMBERS
var sum = 10 + 0;
console.log(sum);

//6. SUBTRACTING NUMBERS
var difference = 10 - 3;

//7. MULTIPLYING NUMBERS
var product = 8 * 0;

//8. DIVIDING NUMBERS
var quotient = 66 / 33;

//9. INCREMENTING NUMBERS
var myVar = 87;

myVar = myVar + 1;

myVar++; //Quicker way

//10. DECREMENTING NUMBErS
var anotherVar = 11;

anotherVar = anotherVar - 1;

anotherVar--; //Quicker way

//11. DECIMAL NUMBERS

var ourDecimal = 5.7;

var myDecimal = 0.009;

//12. MULTIPLY DECIMALS

var product = 2.0 * 2.5;

console.log(product);

//13. DIVIDE DECIMALS

var quotient = 4.4 / 2.0;

//14. FINDING A REMAINDER

var remainder;

remainder = 11 % 3; //remainder = 2

//you can use remainder operations to find even and odd numbers

//15. COMPOUND ASSIGNMENT WITH AUGMENTED ADDITION
a = 3;
b = 17;
c = 12;

a += 12;
b += 9;
c += 7;

//16. COMPOUND ASSIGNMENT WITH AUGMENTED SUBTRACTION
a = 11;
b = 9;
c = 3;

a -= 6;
b -= 15;
c -= 1;

//17. COMPOUND ASSIGNMENT WITH AUGMENTED MULTIPLICATIOn
a = 5;
b = 12;
c = 4.6;

a *= 5;
b *= 3;
c *= 10;

//18. COMPOUND ASSIGNMENT WITH AUGMENTED DIVISION

a = 48;
b = 108;
c = 33;

a /= 12;
b /= 4;
c /= 11;

//19. DECLARE STRING VARIABLES

var firstName = "Alan";
var lastName = "Turing";

var myFirstName = "Jorge";
var myLastName = "Diaz";

//20. ESCAPING LITERAL QUOTES IN STRINGS

var myStr = 'I am a a "double quoted" string inside "double quotes"';

console.log(myStr);

//21 ECAPING WITH SINGLE OR DOUBLE QUOTES

var myStr = '<a href="htttp://www.example.com" target="_blank">Link</a>';
console.log(myStr);

var backTicks = `'<a href="htttp://www.example.com" target="_blank">Link</a>'`;

console.log(backTicks);

//22. OTHER ESCAPE CHARACTERS

/***********
 *      CODE    OUTPUT
 *      \'      single quote
 *      \""     double quote
 *      \\      backslash
 *      \n      newline
 *      \r      carriage return
 *      \t      tab
 *      \b      backspace
 *      \f      form feed
 */

var myString = "FirstLine\n\t\\SecondLine\nThirdLine";

//23. CONCATENATING STRINGS WITH PLUS OPERATOR

var ourStr = "First string. " + " Second String";

var myStr;
"This is the start. " + "This is the end.";

console.log(myStr);

//24. CONCATENATING STRINGS WITH PLUS EQUALS OPERATOR
var otherStr = "I come first. ";
otherStr += "I come second.";

var twoStr = "First sentence. ";
twoStr += "Second sentence";

console.log(twoStr);

//25. CONSTRUCTING STRINGS WITH VARIABLES
ourName = "jfdcDevOps";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

var myName = "Jorge";
var myStr = "My Name is " + myName + " and I am doing awesome";
console.log(myStr);

//26. APPENDING VARIABLES TO STRINGS
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

var someAdj = "worthwhile";
var myStr = "Learning to code is ";
myStr += someAdj;

//27. FIND LENGTH OF STRING
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;

//28. BRACKET NOTATION TO FIND FIRST CHARACTER IN STRING
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName[0];

//29. STRING IMMUTABILITY
var myStr = "Jello World";

myStr[0] = "H"; //THIS WILL NOT WORK

myStr = "Hello World";

//29. BRACKET NOTATION FIND NTH CHARACTER IN STRING
var secondLetterOfFirstName = "";
var firstName = "Ada";

secondtLetterOfFirstName = firstName[1];

var thirdtLetterOfLastName = "";
var lastName = "Lovelace";

thirdtLetterOfLastName = lastName[2];

//30. BRACKET NOTATION TO FIND LAST CHARACTER IN STRING
var lastLetterOfFirstName = "";
var firstName = "Ada";

lasttLetterOfFirstName = firstName[firstName.length - 1];

var lastLetterOfLastName = "";
var lastName = "Lovelace";

lastLetterOfLastName = lastName[lastName.length - 1];

//31. BRACKET NOTATION FO FIN THE NTH-TO-LAST CHARACTER IN STRING
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];
console.log(thirdToLastLetterOfFirstName);
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

//32. WORD BLANKS

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";

  result =
    "My " + " " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;

  return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

//33. STORE MULTIPLE VALUES WITH ARRAYS
var ourArray = ["John", 23];

var myArray = ["Jorge", 39];

//34. NESTED ARRAY
var ourArray = [
  ["the universe", 42],
  ["everything", 101010],
];

var myArray = [
  ["Bulls", 23],
  ["White Sox", 45],
];

//35. ACCESS ARRAY DATA WITH INDEXES
var ourArray = [50, 60, 70];
var ourData = [0]; // equals 50

//36. MODIFY ARRAY DATA WITH INDEXES
var ourArray = [18, 64, 99];
ourArray[1] = 45; // ourArray now equals [18,45,99]

//37. ACCESS MULTI-DIMENSIONAL ARRAYS WITH INDEXES
var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

console.log(myArray[3][0][1]);

//38. MANIPULATE ARRAYS WITH push()
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);

var myArray = [
  ["John", 23],
  ["cat", 2],
];

myArray.push(["dog"], 3);

//39. MANIPULATE ARRAYS WITH pop()
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();
//removedFromOurArray now equals 3, and ourArray now equals [1,2]

var myArray = [
  ["John", 23],
  ["cat", 2],
];

var removedFromMyArray = myArray.pop();

//40. MANIPULATE ARRAYS WITH shift()
var ourArray = ["Stimpson", "J", "cat"];
var removedFromOurArray = ourArray.shift();
//removeFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]] it removes the first element from the array
var myArray = [
  ["John", 23],
  ["dog", 2],
];

var removedFromOurArray = myArray.shift();

//41. MANIPULATE ARRAYS WITH unshift()
var ourArray = ["Stimpson", "J", "cat"];
ourAarray.shift(); //ourArray now equals ["J", "cat"]
ourArray.unshift("Happy"); //ourArray now equals ["Happy", "J","cat"]

var myArray = [
  ["John", 23],
  ["dog", 2],
];
myArray.shift();
myArray.unshift("Paul", 35);

//42. SHOPPING LIST
var myList = [
  ["cereal", 3],
  ["milk", 2],
  ["bananas", 3],
  ["juice", 2],
  ["eggs", 12],
];

//43. WRITE REUSABLE CODE WITH FUNCTIONS
function ourReusableFunction() {
  console.log("Heyya, World");
}

ourReusableFunction();
ourReusableFunction();
ourReusableFunction();

function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();
reusableFunction();
reusableFunction();

//44. PASSING VALUES TO FUNCTIONS WITH ARGUMENTS
