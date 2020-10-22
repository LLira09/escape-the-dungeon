function startGame() {
  console.log('Load Game tile');
  main.innerHTML = '';
  // const charBtn = document.createElement('button');
  // charBtn.className = 'btn btn-primary btn-animated';
  // charBtn.innerText = 'Select Character';
  // main.append(charBtn);
  // charBtn.addEventListener('click', () => {
  //   console.log('click');
  //   main.innerHTML = '';
  //   fetch('http://localhost:3000/api/v1/characters')
  //     .then(res => res.json())
  //     .then(json => {
  //       json.forEach(char => {
  //         console.log(char);
  //         createCharacterCard(char);
  //       });
  //     });
  // });
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
    5,
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
  enemies = [new Enemy('enemy1', 223, 400), new Enemy('enemy2', 222, 400)];

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
        !squares[enemy.currentIndex + direction].classList.contains('door')
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
        squares[charCurrentIndex].classList.contains('enemy-killable') &&
        squares[charCurrentIndex].classList.contains('knight')
      ) {
        squares[enemy.currentIndex].classList.remove(enemy.className, 'enemy');
      }
    }, enemy.speed);
  }

  // Check for gameover
  // function gameOver(){
  //   if(squares[charCurrentIndex].classList.contains('enemy') && !squares[charCurrentIndex].classList.contains('killable')){
  //     enemies.forEach(enemy =>)
  //   }
  // }
  main.append(grid);
}

//   const main = document.querySelector('.main');
//   const charBtn = document.createElement('button');
//   charBtn.className = 'btn btn-primary btn-animated';
//   charBtn.innerText = 'Select Character';
//   main.append(charBtn);
//   charBtn.addEventListener('click', () => {
//     console.log('click');
//     main.innerHTML = '';
//     fetch('http://localhost:3000/api/v1/characters')
//       .then(res => res.json())
//       .then(json => {
//         json.forEach(char => {
//           console.log(char);
//           createCharacterCard(char);
//         });
//       });
//   });
// });

// // Render cards
// function createCharacterCard(char) {
//   const main = document.querySelector('.main');
//   // Create Elements
//   const container = document.createElement('div');
//   const flex = document.createElement('div');
//   const card = document.createElement('div');
//   const face1 = document.createElement('div');
//   const content = document.createElement('div');
//   const img = document.createElement('img');
//   const h3 = document.createElement('h3');
//   const face2 = document.createElement('div');
//   const content2 = document.createElement('div');
//   const hp = document.createElement('p');
//   const strength = document.createElement('p');
//   const speed = document.createElement('p');
//   const mind = document.createElement('p');
//   const a = document.createElement('a');

//   // Assign Elements
//   container.className = 'container';
//   flex.className = 'flex-items';
//   card.className = 'card';
//   face1.className = 'face face1';
//   content.className = 'content';
//   h3.innerText = char.name;
//   content.append(h3);
//   face1.append(content);

//   face2.className = 'face face2';
//   content2.className = 'content';
//   hp.innerText = `HP: ${char.hp}`;
//   strength.innerText = `Strength: ${char.strength}`;
//   speed.innerText = `Speed: ${char.speed}`;
//   mind.innerText = `Mind: ${char.mind}`;
//   a.setAttribute('href', '#');
//   a.innerText = 'Select!';
//   content2.append(hp, strength, speed, mind, a);
//   face2.append(content2);
//   card.append(face1, face2);
//   flex.append(card);
//   container.append(flex);
//   main.append(container);

//   a.addEventListener('click', () => {
//     console.log(char.id);
//   });
