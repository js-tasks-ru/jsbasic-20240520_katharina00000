function showSalary(users, age) {
  return users
    .filter(user => age >= user.age)
    .map( user => (`${user.name}, ${user.balance}`) )
    .join('\n')
}
