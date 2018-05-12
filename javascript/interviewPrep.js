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
console.log("\n2. Unique string function that takes a string and return if all the characters are unique:")  
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
console.log("\n2b. Unique string function that takes a string and return if all the characters are unique (without extra datastructures):")  
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

console.log("\n3. Design an algorithm and write code to remove the duplicate characters in a string without using any additional buffer:")  
console.log('aaaaabbbbccccc: ', removeDupChar('aaaaabbbbccccc'))
console.log('abc: ', removeDupChar('abc'))


// 4. Write a method to decide if two strings are anagrams or not.

// ('asdf','fdsa')
// ('asdf','qwer')

let isAnagram = (a,b) => {
	if (a.length !== b.length) return false
	let aSort = a.split('').sort().toString()
	let bSort = b.split('').sort().toString()
	return (aSort == bSort)
}

console.log("\nWrite a method to decide if two strings are anagrams or not:")  
console.log("'asdf','fdsa': ", isAnagram('asdf','fdsa'))
console.log("'asdf','qwer': ", isAnagram('asdf','qwer'))

// 4b. Dont use sort.

let isAnagramNoSort = (a,b) => {
	if (a.length !== b.length) return false
	let mapChars = a => {
		let charMap = new Map() 
		for(let i = 0; i<a.length; i++){
			if(charMap.has(a[i])){
				charMap.set(a[i], charMap.get(a[i]) + 1)
			} else {
				charMap.set(a[i], 1)
			}
		}
		return charMap
	}

	let aMap = mapChars(a)

	for(let i = 0; i<b.length; i++){
		if (aMap.has(b[i]) && aMap.get(b[i]) > 0){
			aMap.set(b[i], aMap.get(b[i]) - 1)
		} else {
			return false
		}
	}
	return true
}

console.log("\nWrite a method to decide if two strings are anagrams or not without using sort:")  
console.log("'asdf','fdsa': ", isAnagramNoSort('asdf','fdsa'))
console.log("'asdf','qwer': ", isAnagramNoSort('asdf','qwer'))