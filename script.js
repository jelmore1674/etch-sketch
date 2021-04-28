/** @format */

const container = document.getElementById("container");
const resetBtn = document.getElementById("reset");

function makeRows(size) {
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (c = 0; c < size * size; c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener("mouseover", paint);
    }
}

function getGrid() {
    row = prompt("Select Grid Size 4-100");
    if (row < 4) {
        row = 4;
    } else if (row >= 100) {
        row = 100;
    } else {
        row = row;
    }
    size = row;
    makeRows(size);
}

function clearGrid() {
    const gridCount = Math.sqrt(container.childElementCount);
    makeRows(gridCount);
}

function paint(e) {
    const colorChoice = [
        "green",
        "yellow",
        "purple",
        "red",
        "blue",
        "pink",
        "orange",
    ];
    const randomColor = Math.floor(Math.random() * colorChoice.length);
    e.target.style.opacity = 0.8;
    e.target.style.backgroundColor = colorChoice[randomColor];
}

function game() {
    makeRows(24);
}
resetBtn.addEventListener("click", clearGrid);
game();