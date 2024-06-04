function sumSalary (salaries) {
  let sum = 0;
  
  for (let sal in salaries) {
      if(typeof salaries[sal] === 'number' && Number.isFinite(salaries[sal]))   {
          sum += salaries[sal];
      }
  }
  return sum;
}

console.log( sumSalary(salaries) );