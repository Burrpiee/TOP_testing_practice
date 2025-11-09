import caesarCipher from './caesarCipher';

describe('CaesarCipher', () => {
    test('shift every letter of the string up the given shift number', () => {
        expect(caesarCipher('hello', 3)).toBe('khoor');
    });

    test('handle negative shifts', () => {
        expect(caesarCipher('apple', -3)).toBe('xmmib');
    })

    test('should wrap the encrypted string from z to a', () => {
        expect(caesarCipher('zone', 3)).toBe('crqh');
    });

    test('shifted uppercase letters remain uppercase', () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });

    test('ignore punctuations, spaces and all other non alphabetical characters', () => {
        expect(caesarCipher('Good Morning!', 5)).toBe('Ltti Rtwsnsl!')
    })
})