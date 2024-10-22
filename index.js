function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set(); 

  for (let num of array) {
    const complement = target - num;

    if (seenNumbers.has(complement)) {
      return true; 
    }

    seenNumbers.add(num); 
  }

  return false;
}


/* 
  Write the Big O time complexity of your function here
  Runtime: 0(n^2)

*/

/* 
  Add your pseudocode here
  hasTargetSum([22, 19, 4, 6, 30], 25)
  iterate through each number in the array
  identify a complement that adds to the target (comp = target - num)
  iterate through the rest of the array
  check if any number is our complement
  if so, return true
  If i reach the end of te array, return false
*/

/*
  Add written explanation of your solution here
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

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3))

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 5))
}

module.exports = hasTargetSum;
