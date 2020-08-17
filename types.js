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

alert( Math.round(6.35 * 10) / 10);

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

// "a","b",function.  
// функция arr[2] вызывается как метод объекта, получая в this объект из arr и выводя его

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

function camelize(str) {
    return str.split('-').map( (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1) ).join('');
}

//-

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}    
  
let arr = [5, 3, 8, 1];
  
let filtered = filterRange(arr, 1, 4);
  
alert( filtered ); // 3,1 (совпадающие значения)
  
alert( arr ); // 5,3,8,1 (без изменений)

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

function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calculate = function(str) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[op](a, b);
    }
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

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

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

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


//-----------------------------------------------------------------------------


let date = new Date(2013, 1, 20, 3, 12);

alert(date);

//-

function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[date.getDay()];
}

let date = new Date(2012, 0, 3);
alert( getWeekDay(date) ); 

//-

function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) {
        day = 7;
    }
    return day;
}

//-

function getDateAgo(date, days) {
    let newDate = new Date(date);
  
    newDate.setDate(date.getDate() - days);
    return newDate.getDate();
}
  
let date = new Date(2015, 0, 2);
  
alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

//-

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

//-

function getSecondsToday() {
    let date = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let result = date - today;
    return Math.round(result / 1000);
}

//-

function getSecondsToTomorrow(year, month) {
    let date = new Date();
    let tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1);

    let result = tomorrow - date;
    return Math.round(result / 1000);
}

//-

function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
  
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    if (diffSec < 1) {
        return 'прямо сейчас';
    } else if (diffMin < 1) {
        return `${diffSec} сек. назад`
    } else if (diffHour < 1) {
        return `${diffMin} мин. назад`
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}

