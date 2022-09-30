const sum = require("./sum")
const calculator = sum.calculator


test('capitalize first letter of string', () => {
    expect(sum.capitalize("text")).toBe("Text")
})

test('reverse string', () => {
    expect(sum.reverseString("david")).toBe("divad")
})

//tests for calculator object

test('test calculator object functions ', () => {
    expect(calculator.add(1,2)).toBe(3)
    expect(calculator.sub(10,1)).toBe(9)
    expect(calculator.multiply(3,4)).toBe(12)
    expect(calculator.divide(6,2)).toBe(3)
})


//tests for step 4 analyze function
test('get the minimum value of an array', () => {
    expect(sum.findMin([0,2,4,6])).toEqual(0)
})

test('get the max value of an array', () => {
    expect(sum.findMax([0,2,4,6])).toEqual(6)
})

test('get average value for an array', () =>  {
    expect(sum.findAvg([0,2,4,6])).toBe(3)
})

test('get length of an array', () => {
    expect(sum.getLength([0,2,4,6])).toBe(4)
})
