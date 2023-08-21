function sumDouble(a, b) {
  if (a === b) {
    return 2 * (a + b)
  } else {
    return a + b
  }
}

console.log(sumDouble(1, 2)) // 3
console.log(sumDouble(3, 2)) // 5
console.log(sumDouble(2, 2)) // 8
