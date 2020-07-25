let a = +prompt('Введите чилсо a:');
let b = +prompt('Введите чилсо b:');
let sum = a + b;
alert(sum);

//-



//-

function readNumber() {
    let a;
    while ( !isFinite(a) ) {
        a = prompt("Введите число:");
    }
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


