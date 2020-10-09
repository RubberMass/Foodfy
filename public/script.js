//Selecting the recipe
const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');

for (let card of cards) {
    card.addEventListener("click", function() {
        const tipoLanche = card.getAttribute("id");
        window.location.href = `/course/${tipoLanche}`
    })
}



//Esconder/mostrar

const ingredients = document.querySelector('ul.ingredients')
const preparation = document.querySelector('.paragraphs')
const information = document.querySelector('p.information')


const steps = document.querySelectorAll('button')

for (let step of steps) {
    step.addEventListener('click', function() {
        if (step.innerHTML == 'Esconder') {
            step.innerHTML = 'Mostrar'
        } else {
            step.innerHTML = 'Esconder'
        }

        const idButton = step.getAttribute('id')

        if (idButton == 'ingredients-button') {
            if (ingredients.classList.contains('hide')) {
                ingredients.classList.remove('hide')
            } else {
                ingredients.classList.add('hide')
            }
        } else if (idButton == 'preparation-button') {
            if (preparation.classList.contains('hide')) {
                preparation.classList.remove('hide')
            } else {
                preparation.classList.add('hide')
            }
        } else {
            if (information.classList.contains('hide')) {
                information.classList.remove('hide')
            } else {
                information.classList.add('hide')
            }
        }

    })
}