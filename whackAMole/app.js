const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
	square.forEach((squ) => {
		squ.classList.remove('mole');
	});

	let randomPosition = square[Math.floor(Math.random() * 9)];

	randomPosition.classList.add('mole');

	// assign the above randompositionid to hitposition variable
	hitposition = randomPosition.id;
}

square.forEach((sq) => {
	sq.addEventListener('mouseup', () => {
		if (sq.id === hitposition) {
			result = result + 1;
			score.textContent = result;
		}
	});
});

function moveMole() {
	setInterval(randomSquare, 500);
}

moveMole();

function countDown() {
	currentTime--;
	timeLeft.textContent = currentTime;

	if (currentTime === 0) {
		clearInterval(timerId);
		alert('Game over! Your final score is :' + result);
		location.reload();
	}
}

let timerId = setInterval(countDown, 1000);
