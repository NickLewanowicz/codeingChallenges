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

console.log("\n4. Write a method to decide if two strings are anagrams or not:")  
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

console.log("\n4b. Write a method to decide if two strings are anagrams or not without using sort:")  
console.log("'asdf','fdsa': ", isAnagramNoSort('asdf','fdsa'))
console.log("'asdf','qwer': ", isAnagramNoSort('asdf','qwer'))

// 5. Write a method to replace all spaces in a string with ‘%20’.

let encodeSpaces = (str) => {
	for(let i = 0;i<str.length;i++){
		if(str[i] == ' '){
			str = `${str.substring(0,i)}%20${str.substring(i+1,str.length)}`
			i+=2
		}
	}
	return str
}

console.log("\n5. Write a method to replace all spaces in a string with ‘%20’.:")  
console.log("'this is a sample string': ", encodeSpaces('this is a sample string'))
console.log("' ': ", encodeSpaces(' '))

// 6. Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.
let m = [
	[1,1,1],
	[0,0,0],
	[1,1,1]
]

//Will revisit, want to do in linear number of iterations
let rotateMatrix = (m) => {
	let size = m.length
	let row = -1
	let col = -1
	let curr = null
	let temp = 0
	for(let i = 0; i<size*size;i++) {
		if(curr == null){
			if(col < size - row - 1){ƒ
				col++
				curr = m[row][col]
				temp = col
				col = size - row - 1
				row = temp
				next = m[row][col]
			} else {
				row++
				col = row
				curr = m[row][col]
				col = size - row - 1
				next = m[row][col]
			}
		} else { 
			m[row][col] = curr
			curr = next
			
			if(i%4 == 0){
				temp = col
				col = size - row - 1
				row = temp
			}else if (i%4 == 1){

			}else if (i%4 == 2){
				
			}else if (i%4 == 3){
				
			}
		}
	}
}



// 7. Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column is set to 0

let m1 = [
	[1,1,1],
	[1,0,1],
	[1,1,1]
]

let clearRowCol = (arr) => {
	let m = arr.length
	let n = arr[0].length
	let isRowZero = new Array(m)
	let isColZero = new Array(n)
	for(let i = 0; i < m; i++){
		for(let j = 0; j<n; j++){
			if(arr[i][j] == 0){
				isRowZero[i] = arr[i][j] == 0
				isColZero[j] = arr[i][j] == 0
			}
		}
	}
	for(let i = 0; i < m; i++){
		if(isRowZero[i]){
			arr[i].fill(0)
		}
	}
	for(let i = 0; i < n; i++){
		if(isColZero[i]){
			for(let j = 0; j < m; j++){
				arr[j][i] = 0
			}
		}
	}
	
	return arr
}

console.log("\n7. Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column is set to 0:")  
console.log(" [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ]': ", clearRowCol(m1))


// 8. Assume you have a method isSubstring which checks if one word is a substring of
//    another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using
//    only one call to isSubstring (i.e., “waterbottle” is a rotation of “erbottlewat”).

let isRotation = (s1, s2) => {
	return `${s2}${s2}`.includes(s1) && s1.length == s2.length

}


console.log("\n8. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1:")  
console.log("'waterbottle', 'erbottlewat' : ", isRotation('waterbottle', 'erbottlewat'))
console.log("'waterbottle', 'erbottlewat' : ", isRotation('test', 'testing'))