/** @format */

const container = document.getElementById("container");

function erase() {
    const gridItems = document.querySelectorAll("#container > div");

    gridItems.forEach((item) => {
        item.style.backgroundColor = "#fff";
        item.style.opacity = "1";
    });
}

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

function reset() {
    const gridItems = document.querySelectorAll("#container > div");

    gridItems.forEach((item) => {
        item.style.backgroundColor = "#fff";
        item.style.opacity = "1";
    });
}

function paint(e) {
    const colorChoice = ["#3d5a80", "#98c1d9", "#e0fbfc", "#ee6c4d", "#293241"];
    const randomColor = Math.floor(Math.random() * colorChoice.length);
    e.target.style.opacity = 0.6;
    e.target.style.backgroundColor = colorChoice[randomColor];
}

function game() {
    getGrid(16, 16);
}

game();