import analyzeArray from './analyzeArray';

describe('AnalyzeArray', () => {
    const testArray = [1, 8, 3, 4, 2, 6];
    const object = analyzeArray(testArray);

    test('Calculate the length of the array', () => {
        expect(object).toHaveProperty('length', 6);
    });

    test('Get the average of the sum of numbers in array', () => {
        expect(object).toHaveProperty('average', 4);
    });

    test('Get the min value in the array', () => {
        expect(object).toHaveProperty('min', 1);
    });

    test('Get the max value in the array', () => {
        expect(object).toHaveProperty('max', 8);
    });
})