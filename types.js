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