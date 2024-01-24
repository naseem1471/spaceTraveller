const grid = document.querySelector('.grid');
const width = 30;
const height = 30;
let aliensRemoved = [];
let currentShooterIndex = 705;

for (let i = 0; i < width * height; i++) {
  const square = document.createElement('div');
  grid.appendChild(square);
}

const squares = Array.from(document.querySelectorAll('.grid div'));
const alienInvaders = [0, 1, 2, 3, 29, 59, 89, 86];

function draw() {
  for (let i = 0; i < alienInvaders.length; i++) {
    if (!aliensRemoved.includes(i)) {
      squares[alienInvaders[i]].classList.add('invader');
    }
  }
}

draw();

function remove() {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.remove('invader');
  }
}

squares[currentShooterIndex].classList.add('shooter');

function moveShooter(targetId) {
  squares[currentShooterIndex].classList.remove('shooter');
  switch (targetId) {
    case 'btnUp':
      if (currentShooterIndex >= 3 * width) {
        currentShooterIndex -= width;
      }
      break;
    case 'btnDown':
      if (currentShooterIndex < squares.length - width) {
        currentShooterIndex += width;
      }
      break;
    case 'btnLeft':
      if (currentShooterIndex % width !== 0) currentShooterIndex -= 1;
      break;
    case 'btnRight':
      if (currentShooterIndex % width < width - 1) currentShooterIndex += 1;
      break;
  }
  squares[currentShooterIndex].classList.add('shooter');
}

document.addEventListener('keydown', function(e) {
  let targetId;
  switch (e.key) {
    case 'ArrowUp':
      targetId = 'btnUp';
      break;
    case 'ArrowDown':
      targetId = 'btnDown';
      break;
    case 'ArrowLeft':
      targetId = 'btnLeft';
      break;
    case 'ArrowRight':
      targetId = 'btnRight';
      break;
  }
  if (targetId) {
    moveShooter(targetId);
  }
});

document.querySelector('.buttons').addEventListener('click', function(e) {
  const button = e.target.closest('button');
  if (button) {
    moveShooter(button.id);
  }
});

draw();
