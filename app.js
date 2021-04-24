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
ourArray.shift(); //ourArray now equals ["J", "cat"]
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
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}

ourFunctionWithArgs(10, 5);

function functionWithArgs(a, b) {
  console.log(a + b);
}

functionWithArgs(10, 5);

//45. GLOBAL SCOPE AND FUNCTIONS
var myGlobal = 10;

function fun1() {
  // Assigne 5 to oopsGlobal Here
  oopsGlobal = 5; //NO var Keyword means it is GLOBAL
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }

  console.log(output);
}

fun1();
fun2();

//46. LOCAL SCOPE AND FUNCTIONS
function myLocalScope() {
  var myVarLocal = 5;
  console.log(myVarLocal);
}

myLocalScope();

//WOULD GIVE AN ERROR: console.log(myVarLocal);

//47. GLOBAL VS. LOCAL SCOPE IN FUNCTIONS
var outerWear = "T-Shirt";

function myOutFit() {
  var outerWear = "Sweater";
  return outerWear;
}

console.log(myOutFit());
console.log(outerWear);

//48. RETURN A VALUE FROM A FUNCTION WITH RETURN
function minusSeven(num) {
  return num - 7;
}

function timesFive(num) {
  return num * 5;
}
console.log(minusSeven(10));
console.log(timesFive(5));

//49. UNDERSTANDING UNDEFINED VALUE RETURNED FROM A FUNCTION
var sum = 0;
function addThree() {
  sum = sum + 3;
}
function addFive() {
  sum *= 5;
}

console.log(addFive());
console.log(addThree());

//50. ASSSIGNMENT WITH A RETURNED VALUE
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);

//51. STAND IN LINE
function nextInLine(arr, item) {
  arr.push(item);

  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//52. BOOLEAN VALUES
function welcomeToBooleans() {
  return false;
}

//53. USE CONDITIONAL LOGIC WITH IF STATEMENTS
function ourTrueOrFals(isItTrue) {
  if (isItTrue) {
    return "Yes true";
  }
  return "No, False";
}

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes that was true";
  }
  return "No that was false";
}

console.log(trueOrFalse(true));

//54. COMPARISON WITH THE EQUALITY OPERATOR
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }

  return "Not equal";
}

console.log(testEqual(10));

//55. COMPARISON WITH THE STRICT EQUALITY OPERATOR
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }

  return "Not equal";
}

/*
3 === 3     TRUE
3 === "3"   FALSE

*/

console.log(testStrict(10));

//56. PRACTICE COMPARING DIFFERENT VALUES
function compareEquality(a, b) {
  if (a == b) {
    //PERFORMS  A TYPE CONVERSION
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, "10"));

//57. COMPARISON WITH THE INEQUALITY OPERATOR
function testNotEqual(val) {
  if (val != 99) {
    return "Not equal";
  }
  return "Equal";
}

console.log(testNotEqual(10));

//58. COMPARISON WITH THE STRICT INEQUALITY OPERATOR
function testStricNotEqual(val) {
  if (val !== 17) {
    //NO TYPE CONVERSION
    return "Not equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(10));

//59. COMPARISON WITH LOGICAL GREATER THAN OPERATOR
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  if (val > 10) {
    return "Over 10 ";
  }
  return "10 or under";
}

console.log(testGreaterThan(10));

//60.  COMPARISON WITH THE GRETAER THAN OR EQUAL TO OPERATOR
function testGreaterThanOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }
  if (val >= 10) {
    return "10 or Over ";
  }
  return "Less than 10";
}

console.log(testGreaterThanOrEqual(10));

//61.  COMPARISON WITH THE LESS THAN OPERATOR
function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }
  if (val < 55) {
    return "Under 55";
  }
  return "55 or Over";
}

console.log(testLessThan(10));

//62. COMPARISON WITH THE LESS THAN OR EQUAL TO OPERATOR
function testLessOrEqual(val) {
  if (val <= 12) {
    return "Smaller than or equal to 12";
  }
  if (val <= 24) {
    return "Smaller than or equal to 24";
  }
  return "More than 24";
}

console.log(testGreaterThanOrEqual(10));

//63. COMPARISONS WITH THE LOGICAL AND OPERATOR
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  return "No";
}

testLogicalAnd(10);

//64. COMPRISONS WITH THE LOGICAL OR OPERATOR
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}

testLogicalOr(15);

//65. ELSE STATEMENTS
function testELse(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or smaller";
  }

  return result;
}

//66. ELSE IF STATEMENTS
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

testElseIf(7);

//67. LOGICAL ORDER IN IF ELSE STATEMENTS
function orderMyLogic(val) {
  //WROOOOOOOOOONG
  if (val < 10) {
    return "Less that 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    ("return Greater than or equal to 10");
  }
}

console.log(orderMyLogic(4));

function orderMyLogic(val) {
  //RIGHTTTTTTTTTT
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    ("return Greater than or equal to 10");
  }
}
console.log(orderMyLogic(4));

//68.CHAINING IF ELSE STATEMENTS
/*
Write chained if/else if statements to fulfill the following conditions:

num < 5   - return "Tiny"
num < 10  - return "Small"
num < 15  - return "Medium"
num < 20  - return "Large"
num >= 20 - return "Huge"
*/
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}

testSize(7);

//69. GOLF CODE
function golfScore(par, strokes) {
  if (strokes > 0) {
    if (strokes === 1) {
      return "Hole-in one";
    } else if (strokes <= par - 2) {
      return "Eagle";
    } else if (strokes === par - 1) {
      return "Birdie";
    } else if (strokes === par) {
      return "Par";
    } else if (strokes === par + 1) {
      return "Bogey";
    } else if (strokes === par + 2) {
      return "Double Bogey";
    } else {
      return "Go Home";
    }
  }
}

console.log(golfScore(5, 4));

//70. SWITCH STATEMENTS
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }

  return answer;
}

caseInSwitch(1);

//71. DEFAULT OPTION IN SWTICH STATEMENTS
function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}
console.log(switchOfStuff("a"));

//72. MULTIPLE IDENTICAL OPTIONS IN SWITCH STATEMENTS
function sequentialSizes(val) {
  var answer = "";

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  return answer;
}

console.log(sequentialSizes(1));

//73. REPLACING IF ELSE CHAINS WITH SWITCH
function example(val) {
  var answer = "";

  //Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }
  return answer;
}
function chainToSwitch(val) {
  var answer = "";

  //Only change code below this line

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
    default:
      break;
  }
  return answer;
}


//74. RETURNING BOOLEAN VALUES FROM FUNCTIONS
function isLess(a,b){
  return (a<b)
}

console.log(isLess(10,15));

//75. RETURNING EARLY PATTER FROM FUNCTIONS
function abTest(a,b){
  if(a<0 || b <0){
    return undefined
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b),2))
}
console.log(abTest(2,2))

//76. COUNTING CARDS
var count =0;

function cc(card){
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;    

  }

  var holdbet = 'Hold';

  if(count >0){
    holdbet= 'Bet'
  }
  return count + " " + holdbet;
}

cc(2);cc(3);cc(7);cc('K');cc('A');
console.log(cc(4))

//77. BUILD JAVASCRIPT OBJECTS
var ourDog = {
  "name":"Camper",
  "legs": 4,
  "tails":1,
  "friends": ["everything"]
};

var myDog = {
  "name":"Quincy",
  "legs":3,
  "tails":2,
  "friends": []
}

//78. ACCESSING OBJECT PROPERTIES WITH DOT NOTATION
var testObject= {
  "hat":"ballcap",
  "shirt":"jersey",
  "shoes":"cleats"
};

var hatValue = testObject.hat;
var shirtValue = testObject.shirt;

//79. ACCESSING OBJECT PROPERTIES WITH BRACKET NOTATION
var anotherTestObject = {
  "an entree":"hamburger",
  "my sides":"veggies",
  "the drink": "water"
};

var entreeValue= anotherTestObject["an entree"];
var drinkValue= anotherTestObject["the drink"];

//80. ACCESSING OBJECT PROPERTIES WITH VARIABLES
var objectNew = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
}

var playerNumber = 16
var player= objectNew[playerNumber]

//81. UPDATING OBJECT PROPERTIES
ourDog.name = "Happy Camper";
myDog.name = "Yellow"

//82. ADD NEW PROPERTIES TO AN OBJECT
ourDog.bark = "bow-wow";
myDog['bark'] = "woof!";

//83. DELETE PROPERTIES FROM AN OBJECT
delete ourDog.bark;
delete myDog["bark"];
delete myDog.tails;

//84. USING OBJECTS FOR LOOKUPS 
function phoneticLookup(val){
  var result = "";

  var lookup = {
  "alpha": "Adams",
  "bravo": "Boston",
  "charlie": "Chicago",
  "delta": "Denver",
  "echo":"Easy",
  "foxtrot": "Frank"
 };
 result = lookup[val];
 return result;

}

//85. TESTING OBJECTS FOR PROPERTIES
var extraObj = {
  gift: "pony",
  pent: "kitten",
  bed: "sleight"
};

function checkObject(checkProperty){
  if(extraObj.hasOwnProperty(checkProperty)){
    return extraObj[checkProperty];
  }
  else{
    return "Not Found";
  }
}

//86. MANIPULATING COMPLEX OBJECTS
var myMusic = [
  {
    "artist":"Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats":[
      "CD",
      "8T",
      "LP"
    ],
    "gold":true
  },
  {
    "artist":"Beau Carnes",
    "title": "Cereal Man",
    "release_year": 2003,
    "formats":[
      "Youtube video"
    ]
  }
];

//87. ACCESSING NESTED OBJECTS
var myStorage = {
  "car": {
    "inside":{
      "glove box":"maps",
      "passenger seat":"crumbs"
    },
    "outside":{
      "trunk":"jack"
    }
  }
};

var globeBoxContents= myStorage.car.inside["glove box"];