function monkeyTrouble(aSmile, bSmile) {
  return (aSmile && bSmile) || (!aSmile && !bSmile)
}

console.log(monkeyTrouble(true, true)) // true
console.log(monkeyTrouble(false, false)) // true
console.log(monkeyTrouble(true, false)) // false
