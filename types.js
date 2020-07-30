let a = +prompt('Введите чилсо a:');
let b = +prompt('Введите чилсо b:');
let sum = a + b;
alert(sum);

//-



//-

function readNumber() {
    let a;
    do {
        a = prompt("Введите число:");
    } while ( !isFinite(a) );

    if ( a === null || a === "" ) {
        return null;
    } else {
        return a;
    }
}
readNumber();

//-

//цикл бесконечен из-за погрешности при сравнении с добными числами

//-

// ???

//-

//-----------------------------------------------------------------------------

function ucFirst(str) {
    let word = str[0].toUpperCase() + str.slice(1);
    return word;
}
ucFirst("вася");

//-

function checkSpam(str) {
    let someStr = str.toLowerCase();
    if ( someStr.includes('viagra') || someStr.includes('xxx') ) {
        return true;
    } else {
        return false;
    }
}
checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");

//-

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
truncate("Всем привет!", 20);

//-

function extractCurrencyValue(str) {
    return +str.slice(1);
}


//-----------------------------------------------------------------------------


// 4. т.к. массив это обьект и "копирование" его в переменную сделает только новую ссылку на него, а не новый массив.

//-

let styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');

let arrLength = styles.length;

styles[Math.floor((arrLength-1)/2)] = 'Классика';

alert(styles.shift());

styles.unshift('Рэп', 'Регги');

//-

// ? 

//-

function sumInput() {
    let numbers = [];
    while (true) { 
        let val = prompt('Введите число.');
        if ( !isFinite(val) || val === '' || val === null ) break;
        numbers.push(+val);
    } 

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
sumInput();

//-

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}
  
let arr = [5, 3, 8, 1];
  
let filtered = filterRange(arr, 1, 4);
  
alert( filtered ); // 3,1 (совпадающие значения)
  
alert( arr ); // 5,3,8,1 (без изменений)

//-



//-

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (value < a || value > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
  
let arr = [5, 3, 8, 1];
  
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
  
alert( arr ); // [3, 1]

//-

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr );

//-

function copySorted(arr) {
    return arr.slice().sort();
}
  
let arr = ["HTML", "JavaScript", "CSS"];
  
let sorted = copySorted(arr);
  
alert( sorted );
alert( arr );

//-



//-

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names );

//-

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин

//-

function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}
  
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
  
let arr = [ vasya, petya, masha ];
  
sortByAge(arr);
  
// теперь отсортировано: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя

//-



//-

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
  
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
  
let arr = [ vasya, petya, masha ];
  
alert( getAverageAge(arr) ); // 28

//-

function unique(arr) {
    let result = [];
  
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
  
    return result;
}
  
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
  
alert( unique(strings) ); // кришна, харе, :-O


//-----------------------------------------------------------------------------


function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
  
    return sum; // 650
}
  
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
  
alert( sumSalaries(salaries) ); // 650

//-

function count(obj) {
    return Object.keys(obj).length;
}


//-----------------------------------------------------------------------------


let user = {
    name: "John",
    years: 30
};
  
let {name, years: age, isAdmin = false} = user;
  
alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

//-

function topSalary(salaries) {

    let top = 0;
    let topName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
        if (top < salary) {
            top = salary;
            topName = name;
        }
    }
    return topName;
}