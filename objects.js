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


// не хватает ; перед вызовом (user.go)(), поэтому скрипт читается не правильно, пытаясь вызвать объект, как функцию.

//-

// 1 и 2 вызовы сохраняют свой контекст this, а вызовы 3 и 4 из-за то что представляют собой выражение - теряют this

//-

// this внутри makeUser() имеет значение undefined, из-за способа вызова.

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


let object = {};
function A() { return object; }
function B() { return object; }

let a = new A;
let b = new B;

alert( a == b );

//-

function Calculator() {
    
    this.read = function() {
        this.a = prompt('Введите чило a:');
        this.b = prompt('Введите чило b:');
    };
    
    this.sum = function() {
        return this.a + this.b;
    };
    
    this.mul = function() {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Сумма:" + calculator.sum() );
alert( "Произведение:" + calculator.mul() );

//-

function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
        this.value += prompt('Сколько нужно добавить?');
    };
}
  
let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений