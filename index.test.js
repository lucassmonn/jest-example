const applyDiscount = require('./index')

describe('Discount Function', () => {
    test('Apply discount', () => {
        expect(applyDiscount(10, 5)).toEqual(5)
    })

    test('Apply discount greater than value', () => {
        expect(applyDiscount(5, 10)).toEqual(0)
    })

    test('Apply negative discount', () => {
        expect(applyDiscount(10, -5)).toEqual(0)
    })

    test('Apply discount to negative value', () => {
        expect(applyDiscount(-10, 5)).toEqual(0)
    })

    test('Value are not number', () => {
        expect(applyDiscount('10', 5)).toBeFalsy()
    })

    test('Discount are not number', () => {
        expect(applyDiscount(10, '5')).toBeFalsy()
    })
})
