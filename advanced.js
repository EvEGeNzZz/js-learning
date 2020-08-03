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

