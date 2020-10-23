const renderHomePage = (user) => {
    // main.innerHTML = ''
    
    console.log(`welcome to the main menu, ${user.username}!`)
    
    const characters = user.characters

    const main = document.querySelector('.main')

    let menuDiv = document.createElement("div")
    menuDiv.classList.add('welcome-page')
    let menuTitle = document.createElement('h1')
    menuTitle.innerText = `Welcome, ${user.username}!`
    menuTitle.classList.add('main-menu-title')
    let pastGamesDiv = document.createElement('div')
    pastGamesDiv.classList.add('past-games')
    let pastGamesTitle = document.createElement('h3')
    pastGamesTitle.classList.add('past-games-title')
    pastGamesTitle.innerText = 'Previous Lives'

    let charactersList = document.createElement('ul')
    charactersList.classList.add('characters-list')

    characters.forEach(character => {
      let characterLi = document.createElement('li')
      characterLi.classList.add('character-list-item')
      characterLi.innerText = character.name
      charactersList.append(characterLi)
    })
    
    
    const charBtn = document.createElement('button');
    charBtn.className = 'btn btn-primary btn-animated';
    charBtn.innerText = 'Select Character';
    main.append(charBtn);
    charBtn.addEventListener('click', () => {
      console.log('click');
      main.innerHTML = '';
      fetch('http://localhost:3000/api/v1/characters')
        .then(res => res.json())
        .then(json => {
          json.forEach(char => {
            console.log(char);
            createCharacterCard(char, user);
          });
        });
    });


    pastGamesDiv.append(pastGamesTitle, charactersList)
    menuDiv.append(menuTitle, charBtn, pastGamesDiv)
    main.append(menuDiv)
    playSong()
  };
  
  function playSong(){
    const bgm = document.getElementById('bgm')
    bgm.src = './gameassets/audio/thit.mp3'
    bgm.volume = 0.5
    document.addEventListener('click', function(){
      bgm.play()
  
    })
  }

  // Render cards
  function createCharacterCard(char, user) {
    const main = document.querySelector('.main');
    // Create Elements
    const container = document.createElement('div');
    const flex = document.createElement('div');
    const card = document.createElement('div');
    const face1 = document.createElement('div');
    const content = document.createElement('div');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const face2 = document.createElement('div');
    const content2 = document.createElement('div');
    const hp = document.createElement('p');
    const strength = document.createElement('p');
    const speed = document.createElement('p');
    const mind = document.createElement('p');
    const a = document.createElement('a');
  
    // Assign Elements
    container.className = 'container';
    flex.className = 'flex-items';
    card.className = 'card';
    face1.className = 'face face1';
    content.className = 'content';
    h3.innerText = char.name;
    content.append(h3);
    face1.append(content);
  
    face2.className = 'face face2';
    content2.className = 'content';
    hp.innerText = `HP: ${char.hp}`;
    strength.innerText = `Strength: ${char.strength}`;
    speed.innerText = `Speed: ${char.speed}`;
    mind.innerText = `Mind: ${char.mind}`;
    a.setAttribute('href', '#');
    a.innerText = 'Start Game';
    content2.append(hp, strength, speed, mind, a);
    face2.append(content2);
    card.append(face1, face2);
    flex.append(card);
    container.append(flex);
    main.append(container);
  

    //Starts New Game
    a.addEventListener('click', () => {
      
      let gameData = {
        user_id: user.id,
        character_id: char.id
      }
      let gameOptions = {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(gameData)
      }
      fetch(urlPrefix + 'games', gameOptions)
      .then(res => res.json())
      .then(newGame => startGame(newGame))
    });
  }   


