const square = require('./square');

describe('square', () => {
    test('Корректное значение 1', () => {
        expect(square(1)).toBe(1);

        const MathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(MathPow).toBeCalledTimes(0);
    });

    test('Корректное значение 2', () => {
        expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(5);
        expect(square(2)).toBeGreaterThan(3);
    });

    // test('Корректное значение 3', () => {
    //     const MathPow = jest.spyOn(Math, 'pow');
    //     square(3);
    //     expect(MathPow).toBeCalledTimes(1); // второй раз не вызывается (или первый тест, или этот)
    // });
});