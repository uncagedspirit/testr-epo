const {add} = require('../utils/math.util.js');

describe('Math Utility Functions', () => {  
    test('add function adds two numbers correctly', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
        expect(add(0, 0)).toBe(0);
        expect(add(-5, -5)).toBe(-10);
    });
});