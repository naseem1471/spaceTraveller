const grid = document.querySelector('.grid');
// Assuming width and height values
const width = 30;
const height = 30;
let aliensRemoved = [];
let currentShooterIndex = 705;



for (let i = 0; i < width*height; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
  }

  const squares = Array.from(document.querySelectorAll('.grid div'))

  console.log(squares);

  const alienInvaders = [
    0, 1, 2, 3, 29, 59,89, 86
  ]

  function draw() {
    for (let i = 0; i < alienInvaders.length; i++) {
      if(!aliensRemoved.includes(i)) {
        squares[alienInvaders[i]].classList.add('invader')
      }
    }
  };
  
  draw();

  function remove() {
    for (let i = 0; i < alienInvaders.length; i++) {
      squares[alienInvaders[i]].classList.remove('invader')
    }
  }
  
  squares[currentShooterIndex].classList.add('shooter');

  function moveShooter(e) {
    squares[currentShooterIndex].classList.remove('shooter')
    switch(e.key) {
      case 'ArrowLeft':
        if (currentShooterIndex % width !== 0) currentShooterIndex -=1
        break
      case 'ArrowRight' :
        if (currentShooterIndex % width < width -1) currentShooterIndex +=1
        break
      case 'ArrowUp' :
       if (currentShooterIndex >= 3*width)
       currentShooterIndex -= width;
        break 
      case 'ArrowDown' :
       if (currentShooterIndex <= 28*width)
       currentShooterIndex += width;
        break 
    }
    squares[currentShooterIndex].classList.add('shooter')
  }
  document.addEventListener('keydown', moveShooter)

  console.log(squares[currentShooterIndex].classList);

  draw();