// function statement
function greet() {
    console.log('> Hi from function statement\n')
}

greet(); 

// functions are first-class (can be used as any other primitives)
// e.g.: pass them around, set variables equal to them, put them in arrays, etc.
function logGreeting(fn) {  // Creating a function that receives another function (like a string).
    console.log('[INFO] from inside logGreeting now:');
    fn();                   // ... and invoke it.
}

logGreeting(greet);         // invoke this function logGreeting passing 'greet' (line 2) to it.

// function expression is when we write functions on the fly, assigning it to a variable.
// E.g. an expression is 'Hello', '3', or 'a = 1'
var greetMe = function () {
    console.log('> Hi from greetMe\n')
}

greetMe(); // invoke the variable greetMe, which is a function, so add '()' to it.

// greetMe is first class, so I can use it.
logGreeting(greetMe);

// Now use a function expression on the fly, instead of passing one
logGreeting(function () {
    console.log('> Hello from implementation on the fly');
});