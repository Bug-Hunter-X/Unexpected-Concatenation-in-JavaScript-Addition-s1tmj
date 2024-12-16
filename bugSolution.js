function add(a, b) {
  // Type checking to ensure both inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Invalid input: Both arguments must be numbers";
  }
  return a + b; 
}

console.log(add(2, "2")); // Output: Invalid input: Both arguments must be numbers
console.log(add(2, 2)); // Output: 4