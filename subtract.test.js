const add = require('./subtract')
test('properly adds two numbers', () => {
    expect(add(2, 1)).toBe(1)
})