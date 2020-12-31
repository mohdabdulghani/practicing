const { expect } = require('@jest/globals')
const add = require('./sum')
test('properly adds two numbers', () => {
    expect(add(1, 2)).toBe(3)
})