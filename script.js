function isPerfectSquare(n) {
    let sqrt = Math.sqrt(n);
    return sqrt === Math.floor(sqrt);
}

function isFibonacci(num) {
    // Check Fibonacci property
    return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
}  

const input = parseInt(prompt("Enter a number"), 10);
alert(isFibonacci(input));
