function greet() {
    console.log('> Hi from function statement\n')
}

function logGreeting(fn) {
    console.log('[INFO] from inside logGreeting now:');
    fn();
}

var greetMe = function () {
    console.log('> Hi from greetMe\n')
}

greet();
logGreeting(greet);

greetMe();
logGreeting(greetMe);

// Dynamic implementation last
logGreeting(function () {
    console.log('> Hello from implementation on the fly');
});
