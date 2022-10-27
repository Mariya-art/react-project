const validateValue = require('./validateValue');

describe('validateValue', () => {
    test('Корректное зачение', () => {
        expect(validateValue(50)).toBe(true);
    });

    test('Меньше корректного', () => {
        expect(validateValue(-1)).toBe(false);
    });

    test('Больше корректного', () => {
        expect(validateValue(101)).toBe(false);
    });

    test('Пограничное зачение снизу', () => {
        expect(validateValue(0)).toBe(true);
    });

    test('Пограничное зачение сверху', () => {
        expect(validateValue(100)).toBe(true);
    });
});