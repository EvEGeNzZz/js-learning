import { sumTo } from './sum';

describe('sumTo', () => {
    it('sums all numbers up to a given', () => {
        expect(sumTo(1)).toBe(1);
        expect(sumTo(2)).toBe(3);
        expect(sumTo(3)).toBe(6);
        expect(sumTo(4)).toBe(10);
        expect(sumTo(100)).toBe(5050);
    });
});