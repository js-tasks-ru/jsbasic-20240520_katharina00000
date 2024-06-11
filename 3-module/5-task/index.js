function getMinMax(str) {
  let arr = str
    .split(' ')
    .filter( num => isFinite(num) )

  return { min: Math.min(...arr), max: Math.max(...arr) }
}
