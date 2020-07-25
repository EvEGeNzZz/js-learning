let admin;
let name;
name = "Джон";
admin = name;
alert(admin);

// ----------------------------------------------

let planetName;
let currenUser;

// ----------------------------------------------

/* 
birthday - может быть в верхнем регистре, т.к. имеет заранее известное фиксированное значение.
age - не должна быть в верхнем регистре, т.к. она высчитывается
*/


// ----------------------------------------------


/*
hello 1
hello name
hello Ilya
*/


// ----------------------------------------------


/*
"" + 1 + 0 = 10
"" - 1 + 0 = -1
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = 9px
"$" + 4 + 5 = $45
"4" - 2 = 2
"4px" - 2 = NaN
7 / 0 = бесконечность
"  -9  " + 5 =   -9  5
"  -9  " - 5 = -14
null + 1 = 1
undefined + 1 = NaN
" \t \n" - 2 = -2
*/


// ----------------------------------------------


a = 2;
b = 2;
c = 2;
d = 1;

a = 4;
x = 5;


// ----------------------------------------------


5 > 4 //true
"ананас" > "яблоко" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false


// ----------------------------------------------

/*
да, строка - это true

let answer = prompt('Какое «официальное» название JavaScript?');
if (answer === 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
}

let number = prompt('Введите число?');
if (number > '0') {
    alert(1);
} else if (number < '0') {
    alert(-1);
} else {
    alert(0);
}

let result = (a + b < 4) ? "Мало" : "Много";

let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' :
    '';

*/


// ----------------------------------------------


let login = prompt('Кто там?');
if (login === "Admin" ) {
    let password = prompt('Пароль?');
    if (password === "Я главный" ) {
        alert('Здравствуйте!');
    } else if (password === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }

} else if (login === null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}


// ----------------------------------------------

/*

1, потому что цикл остановится на 0, а понижение i-- происходит после вывода i

-

от 0 до 4 и там и там. 

let i = 2;
for (i = 2; i <=10; i++) {
    if (i%2 === 0) {
        alert(i);
    }
}

-

let i = 0;
for ( i < 3) {
  alert( `number ${i}!` );
  i++;
}

-

let number = prompt("Введите число больше 100.")
while (number <= 100) {
    number = prompt("Введите число больше 100.")
}

*/

let n = prompt('Введите число:');
labelName:
for (i = 2; i <= n; i++) {
    for (j = 2; j < i; j++) {
        if (i % j == 0) continue labelName;
    }
    console.log(i);
}

let n = prompt('Введите число:');
for (i = 2; i <= n; i++) {
    let j = 2;
    while ( j <= i ) {
        if ( i % j == 0 && i != 2 ) {
            break;
        } else {
            console.log(i);
        }
        j++;
    }
}


// ----------------------------------------------

let browser;
if (browser == 'Edge') {
    alert( "You've got the Edge!" );
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera' ) {
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}

//-

let number = +prompt('Введите число между 0 и 3', '');
switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}


// ----------------------------------------------


/*

сработает в обоих случаях, т.к. если age > 18, то сработает первый return и функция дальше не пойдет.

*/

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

//-

function min(a, b) {
    if (a >= b) {
        return b;
    } else {
        return a;
    }
}

//-

function pow(x, n) {
    let a = 1;
    let b = x;
    while (a < n) {
        x = b * x;
        a++;
    }
    return x;
}


// ----------------------------------------------


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask("Вы согласны?", () => alert("Вы согласились."), () => alert("Вы отменили выполнение.") );


// ----------------------------------------------