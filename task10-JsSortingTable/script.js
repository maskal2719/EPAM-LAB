
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.setAttribute('id','table')


table.append(thead);
table.append(tbody);
document.getElementById('body').append(table);


let row1 = document.createElement('tr');
let head2 = document.createElement('th');
head2.innerHTML = 'Name';
let head3 = document.createElement('th');
head3.innerHTML = 'Team';

row1.append(head2);
row1.append(head3);
thead.append(row1);

let row2 = document.createElement('tr');
let row2Date2 = document.createElement('td');
row2Date2.innerHTML = 'Reus';
let row2Date3 = document.createElement('td');
row2Date3.innerHTML = 'Borussia Dortmund';

row2.append(row2Date2);
row2.append(row2Date3);
tbody.append(row2);


let row3 = document.createElement('tr');
let row3Date2 = document.createElement('td');
row3Date2.innerHTML = 'Nani';
let row3Date3 = document.createElement('td');
row3Date3.innerHTML = 'Orlando City';

row3.append(row3Date2);
row3.append(row3Date3);
tbody.append(row3);

let row4 = document.createElement('tr');
let row4Date2 = document.createElement('td');
row4Date2.innerHTML = 'Sancho';
let row4Date3 = document.createElement('td');
row4Date3.innerHTML = 'Manchester United';

row4.append(row4Date2);
row4.append(row4Date3);
tbody.append(row4);

let row5 = document.createElement('tr');
let row5Date2 = document.createElement('td');
row5Date2.innerHTML = 'Arauho';
let row5Date3 = document.createElement('td');
row5Date3.innerHTML = 'Barcelona';

row5.append(row5Date2);
row5.append(row5Date3);
tbody.append(row5);

head2.addEventListener('click', () => {
    let sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
        table.tBodies[0].append(...sortedRows);
});

let editingTd;
table.addEventListener('click', (event) => {
    let target = event.target.closest('.edit-ok,td');
  
    if (!table.contains(target)) return;  
        if (target.className == 'edit-ok') {
            finishTdEdit(editingTd.elem, true);
    } else if (target.nodeName == 'TD') {
        if (editingTd) return;
            makeTdEditable(target);
    }
}) 

function makeTdEditable(td) {
    editingTd = {
        elem: td,
        data: td.innerHTML
    };

let textArea = document.createElement('input');
textArea.value = td.innerHTML;
td.innerHTML = '';
td.append(textArea);
textArea.focus();

td.insertAdjacentHTML("beforeEnd",'<button class="edit-ok">OK</button>');
}

function finishTdEdit(td, isOk) {
    if (isOk) {
        td.innerHTML = td.firstChild.value;
    } else {
        td.innerHTML = editingTd.data;
    }
    editingTd = null;
}
