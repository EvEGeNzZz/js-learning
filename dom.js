document.body.firstElementChild

document.body.lastElementChild

document.body.lastElementChild.lastElementChild

//-----------------------------------------------------------------------------


// lastChild - всегда последний элемент, у него не может быть соседа nextSibling, поэтому да

// children[0] - может имень перед собой другие узлы, поэтому нет


//-----------------------------------------------------------------------------


let table = document.body.firstElementChild;
for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}


//-----------------------------------------------------------------------------


let table = document.getElementById('age-table');

table.getElementsByTagName('label');

document.querySelectorAll('#age-table label');

table.getElementsByTagName('td')[0]

let form = document.getElementsByName('search')[0]

form.getElementsByTagName('input')[0]

let inputs = form.querySelectorAll('input')
inputs[inputs.length-1]


//-----------------------------------------------------------------------------


for (let li of document.querySelectorAll('li')) {
    let text = li.firstChild.data;
}

li.getElementsByTagName('li').length


//-----------------------------------------------------------------------------


//BODY


//-----------------------------------------------------------------------------


//document – объект класса HTMLDocument

// Node -> Document -> HTMLDocument

// ? наследует от Node но не наследует от Element ?


//-----------------------------------------------------------------------------

<!DOCTYPE html>
<html>
<body>
    <div data-widget-name="menu">Choose the genre</div>
    <script>
        let elem = document.querySelector('[data-widget-name]');
        alert(elem.getAttribute('data-widget-name'));
    </script>
</body>
</html>


//-----------------------------------------------------------------------------


<a name="list">the list</a>
<ul>
    <li><a href="http://google.com">http://google.com</a></li>
    <li><a href="/tutorial">/tutorial.html</a></li>
    <li><a href="local/path">local/path</a></li>
    <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
    <li><a href="http://nodejs.org">http://nodejs.org</a></li>
    <li><a href="http://internal.com/test">http://internal.com/test</a></li>
</ul>

<script>
    let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
    let links = document.querySelectorAll(selector);
    links.forEach(link => link.style.color = 'orange');
</script>


//-----------------------------------------------------------------------------


//1 и 3

//-----------------------------------------------------------------------------

<ol id="elem">
    <li>Привет</li>
    <li>Мир</li>
</ol>

<script>
    function clear(elem) {
        elem.innerHTML = '';
    }
</script>

//-----------------------------------------------------------------------------

// браузер выводит aaa до таблицы, т.к. внутри table могут быть только теги таблицы.

//-----------------------------------------------------------------------------

let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
    let data = prompt("Введите текст");
    if (!data) {
        break;
    }
    let li = document.createElement('li');
    li.textContent = data;
    ul.append(li);
}

//-----------------------------------------------------------------------------

let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },
    
    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

function createTree(container, obj) {
    container.innerHTML = createTreeFunc(obj);
}
function createTreeFunc(obj) {
    let li = '';
    let ul;
    for (let key in obj) {
        li += '<li>' + key + createTreeFunc(obj[key]) + '</li>';
    }
    if (li) {
        ul = '<ul>' + li + '</ul>'
    }
    return ul || '';
}
createTree(container, data);

//-----------------------------------------------------------------------------

let lis = document.getElementsByTagName('li');

for (let li of lis) {
    let count = li.getElementsByTagName('li').length;
    if (!count) continue;
    li.firstChild.data += ' [' + count + ']';
}

//-----------------------------------------------------------------------------

function createCalendar(elem, year, month) {
    
    let mon = month - 1;
    let d = new Date(year, mon);
    
    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
    
    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }
    
    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';
        
        if (getDay(d) % 7 == 6) {
            table += '</tr><tr>';
        }
        
        d.setDate(d.getDate() + 1);
    }
    
    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }
    
    table += '</tr></table>';
    
    elem.innerHTML = table;
}

function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

createCalendar(calendar, 2020, 8);

//-----------------------------------------------------------------------------

<!DOCTYPE HTML>
<html>
<head>
  <style>
    .hour {
        color: red
    }

    .min {
        color: green
    }

    .sec {
        color: blue
    }
  </style>
</head>

<body>

<div id="clock">
    <span class="hour">hh</span>:<span class="min">mm</span>:<span class="sec">ss</span>
</div>

<script>
    let timerId;

    function update() {
        let clock = document.getElementById('clock');
        let date = new Date();
        
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        clock.children[0].innerHTML = hours;
        
        let minutes = date.getMinutes();
        if (minutes < 10) minutes = '0' + minutes;
        clock.children[1].innerHTML = minutes;
        
        let seconds = date.getSeconds();
        if (seconds < 10) seconds = '0' + seconds;
        clock.children[2].innerHTML = seconds;
    }

    function clockStart() {
        timerId = setInterval(update, 1000);
        update();
    }

    function clockStop() {
        clearInterval(timerId);
    }

    clockStart();
</script>

<input type="button" onclick="clockStart()" value="Старт">
<input type="button" onclick="clockStop()" value="Стоп">

</body>
</html>

//-----------------------------------------------------------------------------

one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

//-----------------------------------------------------------------------------

let sortedRows = Array.from(table.rows).slice(1).sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
table.tBodies[0].append(...sortedRows);


//-----------------------------------------------------------------------------


