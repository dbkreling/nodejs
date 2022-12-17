var firstname = 'Jane';

// external parenthesis makes the function statement to be an expression, than can be invoked.
// parenthesis after the curly bracket actally invokes it.
(function(lastname) {
    var firstname = 'John';
    console.log(firstname);
    console.log(lastname);
}('Doe'));

console.log(firstname);
