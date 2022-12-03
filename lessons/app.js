// function statement
function greet() {
    console.log('Hi')
}

greet();

// functions are first-class (can be used as any other primitives)
function logGreeting(fn) {
    fn();
}