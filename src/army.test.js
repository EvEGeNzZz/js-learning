import makeArmy from './army.js';

describe('army', () => {
    it('works', () => {
        expect(makeArmy[0]()).toBe(0);
        expect(makeArmy[5]()).toBe(5);
    });
});