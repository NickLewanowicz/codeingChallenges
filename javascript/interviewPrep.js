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
console.log("caf: ", spellChecker('caf', ['cat','cap', 'cast', 'castle', 'cod']))
console.log("cad: ", spellChecker('cad', ['cat','cap', 'cast', 'castle', 'cod']))


// 2. Implement an algorithm to determine if a string has all unique characters. 


let allUnique = (str) => {
	let strSet = new Set(str.slice(''))
	return (Array.from(strSet).length == str.length)
}
console.log("2. Unique string function that takes a string and return if all the characters are unique:")  
console.log('abcc: ', allUnique('abcc'))
console.log('abc: ', allUnique('abc'))
  
// 2. b. What if you can not use additional data structures? 
// we assume only ascii characters 
  
let allUniqueB = (str) => {
	let hasChar = new Array(255)

	for(let i = 0; i<str.length; i++){
		if(hasChar[str.charCodeAt(i)] == undefined){
			hasChar[str.charCodeAt(i)] = true	
		} else {
			return false
		}
	}
	return true
}
console.log("2b. Unique string function that takes a string and return if all the characters are unique (without extra datastructures):")  
console.log('abcc: ', allUniqueB('abcc'))
console.log('abc: ', allUniqueB('abc'))

// 3. Design an algorithm and write code to remove the duplicate characters in a string
// without using any additional buffer

let removeDupChar = (str) => {
	for(let i = 0;i < str.length;i++) {
		for(let j = 0; j < i; j++){
			if(str[i] == str[j]){
				str = str.substring(0,j) + str.substring(j+1, str.length)
				i--
			}
		}
	}
	return str
}

console.log("3. Design an algorithm and write code to remove the duplicate characters in a string without using any additional buffer:")  
console.log('aaaaabbbbccccc: ', removeDupChar('aaaaabbbbccccc'))
console.log('abc: ', removeDupChar('abc'))