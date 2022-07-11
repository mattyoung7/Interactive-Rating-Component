const firstCard = document.querySelector('#first-card');
const secondCard = document.querySelector('#second-card');
const submitBtn = document.querySelector('#submit');
const ratingBtns = document.querySelectorAll('.rating-btn');
const ratingNumber = document.querySelector('#rating-number');

submitBtn.addEventListener('click', submitClick);

function submitClick() {
    console.log('clicked');
    firstCard.classList.add('hidden');
    secondCard.classList.remove('hidden');
};

for(let i = 0; i < ratingBtns.length; i++) {
    ratingBtns[i].addEventListener('click', ratingClick);
}

function ratingClick(e) {
    for(let i = 0; i < ratingBtns.length; i++) {
        ratingBtns[i].classList.remove('btn-active');
    }
    e.target.classList.add('btn-active');
    ratingNumber.innerHTML = e.target.innerHTML;
}