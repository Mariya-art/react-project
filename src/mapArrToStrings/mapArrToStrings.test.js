const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToString', () => {
    test('Корректное значение', () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
    });

    test('Разные типы', () => {
        expect(mapArrToStrings([1, 2, 3, null, undefined, 'hgfhg'])).toEqual(['1', '2', '3']);
    });

    test('Пустой массив', () => {
        expect(mapArrToStrings([])).toEqual([]);
    });
});