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

function moveShooter(e) {
  squares[currentShooterIndex].classList.remove('shooter');
  let targetId = e.target.id;
  if (e.target.tagName === 'IMG') {
    targetId = e.target.parentElement.id;
  }
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

  if (e.type === 'keydown') {
    switch (e.key) {
      case 'ArrowUp':
        if (currentShooterIndex >= 3 * width) {
          currentShooterIndex -= width;
        }
        break;
      case 'ArrowDown':
        if (currentShooterIndex < squares.length - width) {
          currentShooterIndex += width;
        }
        break;
      case 'ArrowLeft':
        if (currentShooterIndex % width !== 0) currentShooterIndex -= 1;
        break;
      case 'ArrowRight':
        if (currentShooterIndex % width < width - 1) currentShooterIndex += 1;
        break;
    }
  }

  squares[currentShooterIndex].classList.add('shooter');
}

document.getElementById('btnUp').addEventListener('click', moveShooter);
document.getElementById('btnDown').addEventListener('click', moveShooter);
document.getElementById('btnLeft').addEventListener('click', moveShooter);
document.getElementById('btnRight').addEventListener('click', moveShooter);

document.addEventListener('keydown', moveShooter);

draw();
