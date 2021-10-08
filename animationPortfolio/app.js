const balloon = document.getElementById('air-balloon')
const cloudOne = document.getElementById('cloud-one')
const cloudTwo = document.getElementById('cloud-two')
const cloudThree = document.getElementById('cloud-three')
const cloudFour = document.getElementById('cloud-four')
const cloudFive = document.getElementById('cloud-five')
const javascript = document.getElementById('javascript')
const react = document.getElementById('react')
const graphql = document.getElementById('graphql')
const balloonYFromBottom = 10

function move() {
    const incrementer = window.scrollY
    balloon.style.bottom = balloonYFromBottom + incrementer * 0.1 + '%'
}

window.addEventListener('scroll', move)