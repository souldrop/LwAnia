document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.getElementsById('score')
    const resultDisplay = document.getElementById('result')
    
    //Create a Playing Board
    function createBoard() {
        for(leti=0; i <width*width; i++) {
            square = document.createElement('div')
            square.innerHTML = 0
            gridDisplay.appendChild(square)
            squares.push(square)
        }
    }
    createBoard()

})