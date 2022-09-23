
const sum = require('./sum')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3)
})

test('verifies if the sum is greater than 5', () => {
    expect(sum(2,4)).toBeGreaterThan(5)
})