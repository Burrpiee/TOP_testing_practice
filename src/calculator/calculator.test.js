import calculator from './calculator';

describe('Calculator', () => {
    test('Should add 2 numbers', () => {
        expect(calculator.add(2, 2)).toBe(4);
    });
    
    test('Should subtract second number from first', () => {
        expect(calculator.subtract(4, 2)).toBe(2);
    });

    test('Should multiply 2 numbers', () => {
        expect(calculator.multiply(2, 2)).toBe(4);
    });

    test('Should divide the first number by the second', () => {
        expect(calculator.divide(4, 2)).toBe(2);
    });
});
