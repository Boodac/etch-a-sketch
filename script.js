const container = document.querySelector(".container");
const controls = document.querySelector(".controls");

function createGrid(xWide, yTall) {
    for(let i = 0;i < yTall;i++){ // how many rows?
        const row = document.createElement("div");
        row.className = "row";
        for(let j = 0;j<xWide;j++) { // how many columns?
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

createGrid(16,16);