
export default function analyzeArray(array) {

    const sum = array.reduce((total, current) => total + current, 0);

    return {
        average: sum / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    };
}