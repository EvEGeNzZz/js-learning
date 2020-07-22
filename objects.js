let user = {}
user.name = "Jhon"
user.name = "Smith"
user.name = "Pete"
delete user.name;

//-

function isEmpty(obj) {
    for ( let key in obj ) {
        return false;
    }
    return true;
}



// Объект заданый через const можно менять, т.к. от изменения защищена только сама переменная, а не содержимое объекта.


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for ( let key in salaries ) {
    sum += salaries[key];
}
alert(sum);

//-

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
function multiplyNumeric(obj) {
    for ( let key in obj ) {
        if ( typeof obj[key] === "number" ) {
            obj[key] *= 2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu.height);
console.log(menu.width);


// ------------------------------------------


// ? сложно

//-

// 1 и 2 вызовы сохраняют свой контекст this, а вызовы 3 и 4 из-за то что представляют собой выражение - теряют this

//-

// ? сложно

//-

let calculator = {
    sum() {
        return (this.a + this.b);
    },
    mul() {
        return (this.a * this.b);
    },
    read() {
        this.a = prompt('Введите чило a:');
        this.b = prompt('Введите число b:');
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//-

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() {
        alert( this.step );
        return this;
    }
};
ladder.up().up().down().up().down().showStep();


// ------------------------------------------


