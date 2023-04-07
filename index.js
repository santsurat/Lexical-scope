// Lexicl Scope refers to the ability of a function scope to access variables from the parent scope.

function parent() { 
    child(); // undefined
    var b;
    b=8;
//child () ;  When we call from here then output will be 8  
    console.log(a); // Output will be 9
    function child() {
        console.log(b)
    }
}

var a;
a=9;
parent();
