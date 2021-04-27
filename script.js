/** @format */

const container = document.getElementById("container");
const grid = document.querySelector(".grid-item");

function makeRows(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (c = 0; c < rows * cols; c++) {
        let cell = document.createElement("div");
        cell.innerText = c + 1;
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener("mouseover", paint);
    }
}

function getGrid() {
    row = prompt("Select Grid size 4-100");
    if (row < 4) {
        row = 4;
    } else if (row >= 100) {
        row = 100;
    } else {
        row = row;
    }
    col = row;
    makeRows(row, col);
}

function paint(e) {
    chooseColor = "black";
    e.target.style.backgroundColor = chooseColor;
}

function game() {
    makeRows(16, 16);
}

game();