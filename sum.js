function add(a,b) {
    return a + b
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)

}


function reverseString(str) {
   let array = str.split("")
   array.reverse()
   let newWord = array.join("")
   return newWord
}

const calculator = {
    add:(a,b) => {
        return a + b
    },
    sub: (a,b) => {
        return a - b
    },
    multiply: (a,b) => {
        return a * b
    },
    divide: (a,b) => {
        return a / b
    }
}


function findMin(array) {
   let x = 0
   array.forEach(element => {
    if(element < x) x = element
   })
   return x
     
}

function findMax(array) {
    let x = 0
    array.forEach(element => {
     if(element > x) x = element
    })
    return x
      
 }

 function findAvg(array) {
    let x = null
    array.forEach(element => {
     x+= element
    })

    return x/array.length
      
 }

 function getLength(array) {
    return array.length
 }

 const analyzeArray = (array) => {
    return {
        min: findMin(array),
        max: findMax(array),
        avg: findAvg(array),
        length: getLength(array)
    }
 }
 


module.exports.capitalize = capitalize
module.exports.reverseString = reverseString
module.exports.calculator = calculator
module.exports.findMin = findMin
module.exports.findMax = findMax
module.exports.findAvg = findAvg
module.exports.getLength = getLength
module.exports.analyzeArray = analyzeArray