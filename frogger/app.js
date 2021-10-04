document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const scoreDisplay = document.querySelector('span');
    const startBtn = document.querySelector('.start');
    const width = 9;
    
    let currentIndex = 76;
    let timerId

    //render frog on starting block
    squares[currentIndex].classList.add('frog')

    // write a function that will move the frog
    function moveFrog(e) {
        squares [currentIndex].classList.remove('frog')
        switch(e.keyCode) {
            case 37:
            if (currentIndex % width !== 0) currentIndex -=1
            break;
            
        }
    }
})
