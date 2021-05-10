const grid = document.querySelector('.grid');
const startButton = document.querySelector('#start');
const score = document.getElementById('score');
let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
const width = 10;
const jaeri = 1;

function createGrid() {
  //create 100 of these elements with a for loop
  for (let i = 0; i < width * width; i++) {
    //create element
    const square = document.createElement('div');

    //add styling to the element
    square.classList.add('square');

    //put the element into our grid
    grid.appendChild(square);

    //push it into a new squares array
    squares.push(square);
  }
}

createGrid();

currentSnake.forEach((index) => squares[index].classList.add('snake'));

function move() {
  if (
    // if snake has hit bottom
    (currentSnake[0] + width >= width * width && direction === width) ||
    // if snake has hit right wall
    (currentSnake[0] % width === width - 1 && direction === 1) ||
    // if snake has hit left wall
    (currentSnake[0] % width === 0 && direction === -1) ||
    // if snake has hit top
    (currentSnake[0] - width < 0 && direction === -width) ||
    // if it hits itself
    squares[currentSnake[0] + direction].classList.contains('snake')
  )
    return clearInterval(timerId);

  // remove last element from the currentSnake array
  const tail = currentSnake.pop();
  // console.log(tail);
  // console.log(currentSnake);
  // remove styling from last element
  squares[tail].classList.remove('snake');
  // add square in direction we are heading
  currentSnake.unshift(currentSnake[0] + direction);
  squares[currentSnake[0]].classList.add('snake');
}

move();

let timerId = setInterval(move, 1000);

// clearInterval(timerId);

function control(e) {
  if (e.key === 'ArrowRight') {
    direction = 1;
  } else if (e.key === 'ArrowUp') {
    direction = -width;
  } else if (e.key === 'ArrowLeft') {
    direction = -1;
  } else if (e.key === 'ArrowDown') {
    direction = width;
  }
}

document.addEventListener('keydown', control);

// the modulus(%) operator returns the remainder of the division
