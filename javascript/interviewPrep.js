// 1. Yelp Question

// Write a function given a string and array of string that will 
// return the subarray that contains all strings with exactly 1 
// character difference

// caf, ['cat','cap', 'cast', 'castle', 'cod']


let spellChecker = (txt, arr) => {
  const wordSet = new Set(arr)
  let retArr = []
  for(let i = 0; i < txt.length; i++){
    for(let j = 0; j < 255; j++){
      let start = txt.slice(0, -1 * (txt.length - i))
      let middle = String.fromCharCode(j)
      let end = txt.slice(i + 1)
      
      const currPerm = `${start}${middle}${end}`
      if(wordSet.has(currPerm)) {
        retArr.push(currPerm)  
      }
    }
  }
  return retArr
}
console.log("1. Spellchecker function that takes array of items and a string and returns suggestion based on the strings:")
console.log(spellChecker('caf', ['cat','cap', 'cast', 'castle', 'cod']))