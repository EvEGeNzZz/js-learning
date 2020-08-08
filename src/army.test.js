function makeArmy() {
    let shooters = [];
    for (let i =0; i < 10; i++) { 
        let shooter = function() {
            alert( i );
        };
        shooters.push(shooter);
    }
  
    return shooters;
}
let army = makeArmy();

describe('army', () => {
    it('works', () => {
        expect(army[0]()).toBe(0);
        expect(army[5]()).toBe(5);
    });
});