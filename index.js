function isPalindrome(word) {
  // Write your algorithm here
  //1.convert the word to an array
  word = word.toLowerCase()
  const reversedWord=[]

  //2.Loop through the original word in reverse order adding each character to reversedArray
  for(let i=word.length - 1; i >= 0; i--){
    reversedWord.push(word[i]);
  }
  // 3. Join the characters in the reversedWord array to form a string
  const joinedReversedWord = reversedWord.join('');

  // 4. Compare the original word with the reversed word
  return word === joinedReversedWord;
}

/* 
  Add your pseudocode here
  Prompt user for input{
    1.Create a blank array to hold our reversed string
    2.Loop through the original word in reverse order adding each character to the reversedArray
    3.Join the characters in a reversed array to form a string 
    4.Return true is they are the same and false if they are not
  }
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
