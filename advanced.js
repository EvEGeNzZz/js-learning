function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

function sumTo(n) {
    return n * (n + 1) / 2;
}

//-

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

//-

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

//-

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
  
function printList(list) {
    alert(list.value);
    if (list.next) {
        printList(list.next);
    }
}
  
printList(list);


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
  
function printList(list) {
    while (list) {
        alert(list.value);
        list = list.next;
    }
}
  
printList(list);

//-

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
  
function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next);
    }
    alert(list.value);
}
  
printReverseList(list);


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
  
function printReverseList(list) {
    let arr = [];
  
    while (list) {
        arr.push(list.value);
        list = list.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
        alert( arr[i] );
    }
}
  
  printReverseList(list);

//-----------------------------------------------------------------------------

// 0 и 1 - т.к. окружение у функций разное.

//-

// да, должно все работать

//-

// работать не будет, функция существет только внутри if

//-

function sum(a) {
    return function(b) {
        return a + b; // берёт "a" из внешнего лексического окружения
    };
}

//-

function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    };
}

function inArray(arr) {
    return function(x) {
        return arr.includes(x);
    };
}

//- 

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];
  
function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

//-

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

//-----------------------------------------------------------------------------


function makeCounter() {
    let count = 0;
    function counter() {
        return count++;
    }
    counter.set = value => count = value;
    counter.decrease = () => count--;
    return counter;
}

//- 

function sum(a) {
    let Summary = a;
    function i(b) {
        Summary += b;
        return i;
    }
    i.toString = function() {
        return Summary;
    };
    return i;
}

function sum(a) {
    let Summary = a;
    function i(b) {
        if (b === undefined) {
            return Summary;
        } else {
            Summary += b;
            return i;
        }
    }
    i.toString = function() {
        return Summary;
    };
    return i;
}

//-----------------------------------------------------------------------------

function printNumbers(from, to) {
    let start = from;
  
    let interval = setInterval(function() {
        alert(start);
        if (start == to) {
            clearInterval(interval);
        }
        start++;
    }, 1000);
}

function printNumbers(from, to) {
    let start = from;
  
    setTimeout(function go() {
        alert(start);
        if (start < to) {
            setTimeout(go, 1000);
        }
        start++;
    }, 1000);
}

//-

// setTimeout срабатывает только полсе выполнения всего кода, поэтому alert выведет 100000000