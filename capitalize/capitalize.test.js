import capitalize from "./capitalize"

describe('capitalize', () => {
    test('Capitalize the first letter of a lower case string', () => {
        expect(capitalize('hello')).toBe('Hello');
    });
});