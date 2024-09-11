const container = document.querySelector(".container");
const controls = document.querySelector(".controls");
const changeBtn = document.querySelector("#resize");
const sizeDisplay = document.querySelector("#sizeDisplay");
const DEFAULT_SIZE = 16;
const MIN_SIZE = 4;
const MAX_SIZE = 100;

createGrid(DEFAULT_SIZE);

changeBtn.addEventListener("click", (e) => {
    let answer = prompt("How many pixels wide would you like?", 
                        "Enter an integer from " + MIN_SIZE +
                        "-" + MAX_SIZE + " [default: " + DEFAULT_SIZE + "]");
    if(isNaN(answer)) createGrid(DEFAULT_SIZE);
    else if(parseInt(answer) >= MIN_SIZE && parseInt(answer) <= MAX_SIZE) createGrid(answer);
    else createGrid(DEFAULT_SIZE);
});

function createGrid(gridSize) {
    container.textContent="";
    for(let i = 0; i < gridSize; i++){ // how many rows?
        const row = document.createElement("div");
        row.className = "row";
        for(let j = 0; j<gridSize; j++) { // how many columns?
            const pixel = document.createElement("div");
            pixel.className = "pixel";
            pixel.id = getSelector(i, j);
            pixel.addEventListener("mouseover", (e) => {
                paint(i, j);
            });
            row.appendChild(pixel);
        }
        container.appendChild(row);
    }
    sizeDisplay.textContent = "Current Size: " + gridSize;
}

function getSelector(xCoord, yCoord) {
    let selector = '';
    selector += xCoord;
    selector += "-";
    selector += yCoord;
    return selector;
}

function paint(xCoord, yCoord) {
    let id = getSelector (xCoord, yCoord);
    const pixel = document.getElementById(id);
    pixel.style.backgroundColor = randomColor();
};

function randomColor() {
    // there are 16777216 possible colors, starting from 0
    return "#" + Math.floor(Math.random()*16777215).toString(16);
    // this returns a random number in that range, and then presents it in hexadecimal form
}