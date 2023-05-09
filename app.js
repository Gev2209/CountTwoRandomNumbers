const calc = document.getElementsByClassName('calc') 
const btn = document.querySelector('#btn')
const firstComopnent = document.getElementById('primaryNumber')
const secondComponent = document.getElementById('secondaryNumber')
const answer = document.getElementById('guess')



const randomNumber1 = Math.ceil(Math.random() * 100)
const randomNumber2 = Math.ceil(Math.random() * 100)

firstComopnent.innerHTML = randomNumber1
secondComponent.innerHTML = randomNumber2


let total = randomNumber1 + randomNumber2


function guessAnswer() {
    let userAnswer = parseInt(answer.value)
    if (userAnswer === total) {
        alert('Correct'), window.location.reload()
    } else {
        alert('Incorrect'), window.location.reload()
    }
}

btn.addEventListener('click', guessAnswer)