function startGame() {
  console.log('Load Game tile');
  main.innerHTML = '';
 
  const grid = createEl('div');
  grid.className = 'grid';

  const width = 20;

  layout = [
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
    0,
    0,
    0,
    0,
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
    1,
    0,
    0,
    0,
    0,
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
    0,
    0,
    0,
    0,
    1,
    0,
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
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
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
    4,
    1,
    0,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    3,
    3,
    3,
    6,
    3,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
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
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
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
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    5,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    4,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    1,
    2,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
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
    1,
    0,
    1,
    0,
    0,
    0,
    1,
    1,
    7,
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
    0
  ];
  // 0 = paths
  // 1 = walls
  // 2 = player
  // 3 = item
  // 4 = door
  // 5 = enemy
  // 6 = sword
  // 7 = exit
  const squares = [];

  //   draw the grid and render it
  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement('div');
      grid.appendChild(square);
      squares.push(square);

      //add layout to the board
      if (layout[i] === 5) {
        squares[i].classList.add('keyEnemy');
      } else if (layout[i] === 1) {
        squares[i].classList.add('wall');
      } else if (layout[i] === 6) {
        squares[i].classList.add('sword');
      } else if (layout[i] === 4) {
        squares[i].classList.add('door');
      } else if (layout[i] === 7) {
        squares[i].classList.add('exit');
      }
    }
  }
  createBoard();

  let charCurrentIndex = 250;

  squares[charCurrentIndex].classList.add('knight');

  function moveChar(e) {
    squares[charCurrentIndex].classList.remove('knight');

    switch (e.keyCode) {
      case 37:
        if (
          charCurrentIndex % width !== 0 &&
          !squares[charCurrentIndex - 1].classList.contains('wall')
        )
          charCurrentIndex -= 1;
        break;
      case 38:
        if (
          charCurrentIndex - width >= 0 &&
          !squares[charCurrentIndex - width].classList.contains('wall')
        )
          charCurrentIndex -= width;
        break;
      case 39:
        if (
          charCurrentIndex % width < width - 1 &&
          !squares[charCurrentIndex + 1].classList.contains('wall')
        )
          charCurrentIndex += 1;
        break;
      case 40:
        if (
          charCurrentIndex + width < width * width &&
          !squares[charCurrentIndex + width].classList.contains('wall')
        )
          charCurrentIndex += width;
        break;
    }
    squares[charCurrentIndex].classList.add('knight');
    // foundItem();
    swordPickUp();
    gameOver();
    madeExit();
  }

  document.addEventListener('keyup', moveChar);
  // Pick Up sword
  function swordPickUp() {
    if (squares[charCurrentIndex].classList.contains('sword')) {
      enemies.forEach(enemy => (enemy.killable = true));
      squares[charCurrentIndex].classList.remove('sword');
    }
  }

  // create Enemy Template
  class Enemy {
    constructor(className, startIndex, speed) {
      this.className = className;
      this.startIndex = startIndex;
      this.speed = speed;
      this.currentIndex = startIndex;
      this.timerId = NaN;
      this.killable = false;
    }
  }
  // All Enemies
  enemies = [
    new Enemy('enemy1', 223, 400),
    new Enemy('enemy2', 222, 400),
    new Enemy('enemy3', 190, 400)
  ];

  // draw enemies on the grid
  enemies.forEach(enemy => {
    squares[enemy.currentIndex].classList.add(enemy.className);
    squares[enemy.currentIndex].classList.add('enemy');
  });
  // Move all the enemies randomly
  enemies.forEach(enemy => moveEnemies(enemy));

  // // move Enemies
  function moveEnemies(enemy) {
    const directions = [-1, +1, width, -width];
    let direction = directions[Math.floor(Math.random() * directions.length)];

    enemy.timerId = setInterval(function() {
      if (
        !squares[enemy.currentIndex + direction].classList.contains('wall') &&
        !squares[enemy.currentIndex + direction].classList.contains('enemy') &&
        !squares[enemy.currentIndex + direction].classList.contains('door') &&
        !squares[enemy.currentIndex + direction].classList.contains('exit')
      ) {
        // Go this way
        // remove all enemey related classes
        squares[enemy.currentIndex].classList.remove(enemy.className, 'enemy');
        squares[enemy.currentIndex].classList.remove(
          enemy.className,
          'enemy-killable'
        );

        // Change ther currentIndex to the new square
        enemy.currentIndex += direction;
        // redraw the enemy in the new space
        squares[enemy.currentIndex].classList.add(enemy.className, 'enemy');
      } else direction = directions[Math.floor(Math.random() * directions.length)];

      // The enemy is currently Killable
      if (enemy.killable) {
        squares[enemy.currentIndex].classList.add('enemy-killable');
      }
      // Check if enemies are killable
      if (
        enemy.killable &&
        squares[enemy.currentIndex].classList.contains('knight')
      ) {
        console.log('Interaction');
        clearInterval(enemy.timerId);
        squares[enemy.currentIndex].classList.remove(
          enemy.className,
          'enemy',
          'enemy-killable',
          'enemy1',
          'enemy2'
        );
        squares[enemy.currentIndex].classList.add('coffin');
      }

      gameOver(enemy);
      madeExit();
    }, enemy.speed);
  }
  // Check for gameover
  function gameOver(enemy) {
    if (
      squares[charCurrentIndex].classList.contains('enemy') &&
      !squares[charCurrentIndex].classList.contains('enemy-killable')
    ) {
      clearInterval(enemy.timerId);
      document.removeEventListener('keyup', moveChar);
      alert('Game Over');
    }
  }
  // Check If charcater made it to exit
  function madeExit() {
    if (
      squares[charCurrentIndex].classList.contains('exit') &&
      squares[charCurrentIndex].classList.contains('knight')
    ) {
      alert('You made the Exit!');
    }
  }

  main.append(grid);

  openingScene();  
  
  function openingScene() {
    let openingText =
      "You awake inside of a dungeon cell with a wicked headache and cloudy memory. The guard standing by your cell door looks at you with a magical haze in his eyes as he unlocks your cell. You aren't sure how you got here, but you know you need to get out.";
    let openingInfo = createInfoCard(openingText);
    grid.append(openingInfo);
  }

}

