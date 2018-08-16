/*
Assertions are functions that help us assert the test is correct
Tasks:

1. Implement the toEqual and toBe assetion functions
2. Use your assertion functions to assert sum(2,1) and substract(2,1) work as expected
*/

function toEqual(actual, expected) {
  if (actual == expected) {
    return true
  } else {
    throw new Error(`Expected ${actual} but saw ${expected}`)
  }
}

function toBe(actual, expected) {
  if (actual === expected) {
    return true
  } else {
    return false
  }
}

const sum = (a, b) => a + b

const substract = (a, b) => a - b 

let actual, expected

actual = sum(1,2)
expected = 3
toBe(actual, expected)

actual = substract(2,1)
expected = '1'
toEqual(actual, expected)

console.log('ok')
