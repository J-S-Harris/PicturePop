const tiles = document.querySelectorAll('.tile')
console.log('tiles')
for (const tile of tiles) {
    tile.addEventListener('click', () => {
    let colourA = (Math.floor(Math.random()*256))
    let colourB = (Math.floor(Math.random()*256))
    let colourC = (Math.floor(Math.random()*256))
    console.log(colourA,colourB,colourC);
    tile.style.backgroundColor = `rgb(${colourA}, ${colourB}, ${colourC})`;
    outerContainer.style.border = `5px solid rgb(${colourA},${colourB},${colourC})`
} ) } 