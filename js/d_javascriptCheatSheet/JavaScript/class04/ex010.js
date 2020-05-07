
function sum(n1 = 0, n2 = 0){
    return n1 + n2
}

console.log(sum(2));

/**/ 

let v = function(x){
    return x*2
}

console.log(v(5));

/**/ 

function factorial(n){
    let fact = 1;

    for(let i = n; i > 1; i--){
        fact *= i
    }
    return fact
}

console.log(factorial(5));

/**/ 

function recursiveFactorial(n){
    if(n == 1){
        return 1
    }else{  
        return n * recursiveFactorial(n-1)
    }
}

console.log(recursiveFactorial(5));
