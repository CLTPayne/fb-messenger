const sum = (a, b) => a + b

const subtract = (a, b) => a - b

// Let's write some tests for those functions

let actual = subtract(4, 2)
let result = 2

if (actual !== result) {
  throw new Error(`Subtract is broken, expected ${result} but received ${actual}`)
} else {
  console.log(`Test for subtract passes`)
}
