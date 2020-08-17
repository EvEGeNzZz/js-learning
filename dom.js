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