function hasTargetSum(array, target) {
  // Write your algorithm here
  const map = {};
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (map[complement] !== undefined) {
      return true;
    } else {
      map[array[i]] = i;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n) - linear time complexity
*/

/* 
  Add your pseudocode here
  1. Create a map to store values and indices of the input array
  2. Loop through the array
    a. Calculate the complement of the current element with respect to the target
    b. If the complement exists in the map, return true
    c. Else, store the current element and its index in the map
  3. Return false if no pair of elements add up to the target
*/

/*
  Add written explanation of your solution here
  This solution uses a hash table to keep track of elements seen in the input array.
  While looping through the array, it calculates the complement of the current element 
  with respect to the target. If the complement exists in the hash table, it means that 
  we have found a pair of elements that add up to the target, and the function returns true.
  If the complement does not exist in the hash table, the current element is stored in the 
  hash table with its index. If no pair of elements add up to the target, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
