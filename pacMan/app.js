document.addEventListener('DOMContentLoaded', () => {
	const grid = document.querySelector('.grid');
	const scoreDisplay = document.querySelector('#score');
	let score = 0;

	const width = 28; // we want 28 X 28 = 784 squares, each having 20px size

	//layout of grid and what is in the square

	const layout = [
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		3,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		3,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		4,
		4,
		4,
		4,
		4,
		4,
		4,
		4,
		4,
		4,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		4,
		1,
		1,
		1,
		2,
		2,
		1,
		1,
		1,
		4,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		4,
		1,
		2,
		2,
		2,
		2,
		2,
		2,
		1,
		4,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		4,
		4,
		4,
		4,
		4,
		4,
		0,
		0,
		0,
		4,
		1,
		2,
		2,
		2,
		2,
		2,
		2,
		1,
		4,
		0,
		0,
		0,
		4,
		4,
		4,
		4,
		4,
		4,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		4,
		1,
		2,
		2,
		2,
		2,
		2,
		2,
		1,
		4,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		4,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		4,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		4,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		4,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		4,
		4,
		4,
		4,
		4,
		4,
		4,
		4,
		4,
		4,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		3,
		0,
		0,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		0,
		0,
		3,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		0,
		0,
		0,
		0,
		1,
		1,
		0,
		0,
		0,
		0,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
	];
	// 0 - pac-dots
	// 1 - wall
	// 2 - ghost-lair
	// 3 - power-pellet
	// 4 - empty

	const squares = [];

	//draw the grid and render interface
	function createBoard() {
		for (let i = 0; i < layout.length; i++) {
			const square = document.createElement('div');
			grid.appendChild(square);
			squares.push(square);

			if (layout[i] === 0) {
				squares[i].classList.add('pac-dot');
			} else if (layout[i] === 1) {
				squares[i].classList.add('wall');
			} else if (layout[i] === 2) {
				squares[i].classList.add('ghost-lair');
			} else if (layout[i] === 3) {
				squares[i].classList.add('power-pellet');
			}
		}
	}

	createBoard();

	// create charactors, create pacman
	//starting position of pac_man
	let pacmanCurrentPosition = 490;
	squares[pacmanCurrentPosition].classList.add('pac-man');

	//move pac-man
	function movePacman(e) {
		squares[pacmanCurrentPosition].classList.remove('pac-man');

		switch (e.keyCode) {
			case 37:
				if (
					pacmanCurrentPosition % width !== 0 &&
					!squares[pacmanCurrentPosition - 1].classList.contains('wall') &&
					!squares[pacmanCurrentPosition - 1].classList.contains('ghost-lair')
				)
					pacmanCurrentPosition -= 1;
				// check if pacman is inn left exit
				if (pacmanCurrentPosition - 1 === 363) {
					pacmanCurrentPosition = 391;
				}
				break;
			case 38:
				if (
					pacmanCurrentPosition - width >= 0 &&
					!squares[pacmanCurrentPosition - width].classList.contains('wall') &&
					!squares[pacmanCurrentPosition - width].classList.contains(
						'ghost-lair'
					)
				)
					pacmanCurrentPosition -= width;
				break;
			case 39:
				if (
					pacmanCurrentPosition % width < width - 1 &&
					!squares[pacmanCurrentPosition + 1].classList.contains('wall') &&
					!squares[pacmanCurrentPosition + 1].classList.contains('ghost-lair')
				)
					pacmanCurrentPosition += 1;
				// check if pacman is in right exit
				if (pacmanCurrentPosition + 1 === 392) {
					pacmanCurrentPosition = 364;
				}
				break;

			case 40:
				if (
					pacmanCurrentPosition + width < width * width &&
					!squares[pacmanCurrentPosition + width].classList.contains('wall') &&
					!squares[pacmanCurrentPosition + width].classList.contains(
						'ghost-lair'
					)
				)
					pacmanCurrentPosition += width;
				break;
		}

		squares[pacmanCurrentPosition].classList.add('pac-man');

		// pacdot eaten()
		pacDotEaten();

		// power pellet eaten()
		powerPelletEaten();
		// checkfor Gameover()
		// checkForGameOver();
		// check for win()
		// checkForWin();
	}

	document.addEventListener('keyup', movePacman);

	// what happens when pacman eats pac-dot
	function pacDotEaten() {
		if (squares[pacmanCurrentPosition].classList.contains('pac-dot')) {
			score++;
			scoreDisplay.textContent = score;
			squares[pacmanCurrentPosition].classList.remove('pac-dot');
		}
	}

	// what happens when you eat a power-pallet
	function powerPelletEaten() {
		if (squares[pacmanCurrentPosition].classList.contains('power-pellet')) {
			score += 10;
			scoreDisplay.textContent = score;
			ghosts.forEach((ghost) => {
				ghost.isScared = true;
			});
			setTimeout(makeGhostUnscared(), 10000);
			squares[pacmanCurrentPosition].classList.remove('power-pellet');
		}
	}

	// make ghosts un-scared
	function makeGhostUnscared() {
		ghosts.forEach((ghost) => {
			ghost.isScared = false;
		});
	}

	// create ghost template
	class Ghost {
		constructor(className, startIndex, speed) {
			this.className = className;
			this.startIndex = startIndex;
			this.speed = speed;
			this.currentIndex = startIndex;
			this.timerId = NaN;
			this.isScared = false;
		}
	}

	ghosts = [
		new Ghost('blinky', 348, 250),
		new Ghost('pinky', 376, 400),
		new Ghost('inky', 351, 300),
		new Ghost('clyde', 379, 500),
	];

	// draw ghosts on to the layout grid
	ghosts.forEach((ghost) => {
		squares[ghost.currentIndex].classList.add(ghost.className);
		squares[ghost.currentIndex].classList.add('ghost');
	});

	// move ghosts randomly
	ghosts.forEach((ghost) => moveGhost(ghost));

	// function to move ghost randomly
	function moveGhost(ghost) {
		const directions = [1, -1, width, -width];
		let direction = directions[Math.floor(Math.random() * directions.length)];

		ghost.timerId = setInterval(function () {
			//if the next squre your ghost is going to go to does not have a ghost and does not have a wall
			if (
				!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
				!squares[ghost.currentIndex + direction].classList.contains('wall')
			) {
				//remove the ghosts classes
				squares[ghost.currentIndex].classList.remove(ghost.className);
				squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost');
				//move into that space
				ghost.currentIndex += direction;
				squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
				//else find a new random direction ot go in
			} else direction = directions[Math.floor(Math.random() * directions.length)];

			//if the ghost is currently scared
			if (ghost.isScared) {
				squares[ghost.currentIndex].classList.add('scared-ghost');
			}
			//if the ghost is currently scared and pacman is on it
			if (
				ghost.isScared &&
				squares[ghost.currentIndex].classList.contains('pac-man')
			) {
				squares[ghost.currentIndex].classList.remove(
					ghost.className,
					'ghost',
					'scared-ghost'
				);
				ghost.currentIndex = ghost.startIndex;
				score += 100;
				squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
			}
			checkForGameOver();
		}, ghost.speed);
	}

	//check for a game over
	function checkForGameOver() {
		if (
			squares[pacmanCurrentPosition].classList.contains('ghost') &&
			!squares[pacmanCurrentPosition].classList.contains('scared-ghost')
		) {
			ghosts.forEach((ghost) => clearInterval(ghost.timerId));
			document.removeEventListener('keyup', movePacman);
			setTimeout(function () {
				alert('Game Over');
			}, 500);
		}
	}

	//check for a win - more is when this score is reached
	function checkForWin() {
		if (score === 274) {
			ghosts.forEach((ghost) => clearInterval(ghost.timerId));
			document.removeEventListener('keyup', movePacman);
			setTimeout(function () {
				alert('You have WON!');
			}, 500);
		}
	}
});
