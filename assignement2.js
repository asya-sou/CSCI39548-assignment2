// FOR EACH //
// will take in an array of elements
// execute any callback function on each of those elements
Array.prototype.myEach = function (callb,thisArg) {

    for (let i = 0; i < this.length; i++) { //for the length of the array
        callb(this[i], i, this); //implement callb function
    }
};

//--------------- TESTING ForEach ---------------//
/*
//test callback function (concsole log renamed)
function print(object) {
    console.log(object);
};

//test array
let words = ["dog", "plant", "cat"];

//test myEach
words.myEach(print);
*/
//----------------------------------------------//


// MAP //
// will take in an array of elements
// execute any callback function on each of those elements
// callback output is in a new array
Array.prototype.myMap = function(callb, thisArg) {
    let outputArr = []; //create array for callback output

    for (let i = 0; i < this.length; i++){ //for the length of the array
        outputArr.push(callb(this[i], i, this)); //push callback output into new array
    }
    return outputArr; //return new array
};

//--------------- TESTING MyMap ---------------//
/*
//test callback function (adds 2 to a number)
function plusplus(yourNumber) {
    let newNum = yourNumber +2;
    return newNum;
};

//test arrays
var test = [1, 2, 3, 4];

//test myMap
var newNumbers = test.myMap(plusplus);//set new array to myMap output
console.log(test.myMap(plusplus)); //test printing returned array
console.log(newNumbers);//test array set to myMap output array
console.log(test); //check if old array stayed the same
*/
//----------------------------------------------//


// FILTER //
// will take in an array of elements
//create a new array with elements that pass callback function
Array.prototype.myFilter = function(callb, thisArg) {
    let outputArr = [];
    for(let i=0; i < this.length; i++){
        if(callb(this[i], i, this)) { //if passes function specs
            outputArr.push(this[i]); //add to new array
        }
    }
    return outputArr; //return array
};


//--------------- TESTING myFilter ---------------//
/*
//test callback function (adds 2 to a number)
function twoMore(yourNumber) {
    return (yourNumber >= 2);
};

//test arrays
var test = [1, 2, 3, 4];

//test myFilter
var newNumbers = test.myFilter(twoMore);//set new array to myFilter output
console.log(test.myFilter(twoMore)); //test printing returned array
console.log(newNumbers);//test array set to myMap output array
console.log(test); //check if old array stayed the same
*/
//----------------------------------------------//


// SOME //
// will take in an array of elements
//returns true if at least one element passes callback specs
Array.prototype.mySome = function() {
    var truth = false; //set truth to true untill callb fails 
    for(let i=0; i < this.length; i++){
        if(!(callb(this[i], i, this))) { //if at least one pass function specs
           truth = true; //return value will be true
        }
    }
    return truth; //return the truth
};

// EVERY //
// will take in an array of elements
//returns true if all elements pass callback specs

Array.prototype.myEvery = function() {
    var truth = true; //set truth to true untill callb fails 
    for(let i=0; i < this.length; i++){
        if(!(callb(this[i], i, this))) { //if at least one doesn't  pass function specs
           truth = false; //return value will be false
        }
    }
    return truth; //return the truth
};

// REDUCE //
// will take in an array of elements
// cuts array to single value
// value based on callb
// accumulator - single return value
Array.prototype.myReduce = function() {

};

// INCLUDES //
// will take in an array of elements
// checks if it contains a value
Array.prototype.myIncludes = function() {

};

// INDEXOF //
// will take in an array of elements
// returns first i @ which a given element is found
// returns -1 if not present
Array.prototype.myIndexOf = function() {

};

// PUSH //
// will take in an array of elements
// adds element(s) to the array
// returns updated length
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
// will take in an array of elements
// returns last i @ which a given element is found
// returns -1 if not present
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
// will take in an object
// returns an array of enumerable properties of the obj.
Object.grabKeys = function() {

};

// VALUES //
// will take in an object
// returns an array of values of enumerable properties
Object.grabValues = function() {

};
