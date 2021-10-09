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

    // the '10' refers to the height from the bottom of the sky section . We added this  in the css file.
    balloon.style.bottom = 10 + incrementer * 0.1 + '%'

    cloudOne.style.bottom = 40 + incrementer * 0.12 + '%'
    cloudOne.style.left = 70 + incrementer * 0.1 + '%'
    cloudTwo.style.bottom = 80 + incrementer * 0.12 + '%'
    cloudTwo.style.left = 70 + incrementer * 0.15 + '%'
    cloudThree.style.bottom = 60 + incrementer * 0.14 + '%'
    cloudThree.style.left = 0 + incrementer * 0.15 + '%'
    cloudFour.style.bottom = 70 + incrementer * 0.14 + '%'
    cloudFour.style.left = 20 + incrementer * 0.15 + '%'
    cloudFive.style.bottom = 60 + incrementer * 0.2 + '%'
    cloudFive.style.left = 60 + incrementer * 0.16 + '%'
    javascript.style.left = 20 + incrementer * -2.2 + '%'
    react.style.marginRight = 26 + incrementer * -1.5 + '%'
    graphql.style.marginRight = 32 + incrementer * -1 + '%'
}

window.addEventListener('scroll', move)

