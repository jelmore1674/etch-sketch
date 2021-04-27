/** @format */

const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (c = 0; c < rows * cols; c++) {
        let cell = document.createElement("div");
        cell.innerText = c + 1;
        container.appendChild(cell).className = "grid-item";
    }
}

function getGrid() {
    let row = prompt("Select Grid size 4-64");

    if (row < 4) {
        row = 4;
    } else if (row >= 100) {
        row = 100;
    } else {
        row = row;
    }
    let col = row;
    makeRows(row, col);
}

getGrid();