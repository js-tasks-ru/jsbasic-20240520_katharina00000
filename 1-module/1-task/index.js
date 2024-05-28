function factorial(n) {
  let x = n - 1;
  
  for(let i = x; i > 0; i--) {
    n *= i;
  }

  if(n === 0) {
    return 1;
  } else {
    return n;
  }
}

console.log( factorial() );