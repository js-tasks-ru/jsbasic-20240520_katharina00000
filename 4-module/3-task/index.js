function highlight(table) {
  let rows = table.rows;

  for(let row of rows) {
    let avbl = row.cells[3];

    if(avbl.hasAttribute('data-available')) {
      switch(avbl.dataset.available) {
        case 'true':
          row.classList.add('available');
          break;
        case 'false':
          row.classList.add('unavailable');
      }
    } else {
      row.setAttribute('hidden', 'true');
    }

    let gender = row.cells[2].textContent;

    if(gender == 'm') {
      row.classList.add('male');
    } else if (gender == 'f') {
      row.classList.add('female');
    }

    let age = Number(row.cells[1].textContent);

    if(age < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}
