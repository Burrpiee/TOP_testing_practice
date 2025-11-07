import reverseString from "./reverseString";

describe('reverseString', () => {
    test('Should reverse a string', () => {
        expect(reverseString('Hello')).toBe('olleH');
    });
})