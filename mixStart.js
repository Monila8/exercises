function mixStart(str) {
  return str.includes("ix", 1) // Begin checking from the second character.
}

console.log(mixStart("mix snacks")) // true
console.log(mixStart("pix snacks")) // true
console.log(mixStart("piz snacks")) // false
