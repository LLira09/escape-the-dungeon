const main = document.querySelector('.main');
const urlPrefix = 'http://localhost:3000/api/v1/';

document.addEventListener('DOMContentLoaded', function() {
  console.log("We're loaded up!");
  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('overlay');

  openModalButtons.forEach(button => {
    button.addEventListener('click', e => {
      console.log(e.target.innerHTML);
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
      if (
        e.target.innerHTML == 'Login' ||
        e.target.innerHTML == 'Get Started!'
      ) {
        main.innerHTML = '';
        renderLogIn();
      } else if (e.target.innerHTML == 'SignUp') {
        main.innerHTML = '';
        renderSignUpForm();
      }
    });
  });

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });

  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
  }
  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
    const modalRemove = document.querySelector('.modal-body');
    modalRemove.innerHTML = '';
  }
  function createWelcomePage(modal) {
    const welcomeDiv = createEl('div');
    welcomeDiv.className = 'welcome-page';

    const title = createEl('h1');
    title.className = 'welcome-title';
    title.innerText = 'Escape the Dungeon';

    const spacerDiv = createEl('div');
    spacerDiv.setAttribute('style', 'height: 30px;');

    const startBtn = createEl('button');
    startBtn.innerText = 'Get Started!';
    startBtn.setAttribute('data-modal-target', '#modal');
    startBtn.className = 'btn btn-primary btn-animated';
    startBtn.addEventListener('click', e => {
      openModal(modal);
      if (e.target.innerHTML == 'Get Started!') {
        main.innerHTML = '';
        renderLogIn();
      }
    });

    welcomeDiv.append(title, spacerDiv, startBtn);
    main.append(welcomeDiv);
  }

  // startGame()
  createWelcomePage(modal);
  playSong();
});

// function createWelcomePage(modal) {
//   const welcomeDiv = createEl('div');
//   welcomeDiv.className = 'welcome-page';

//   const title = createEl('h1');
//   title.className = 'welcome-title';
//   title.innerText = 'Escape the Dungeon';

//   const spacerDiv = createEl('div');
//   spacerDiv.setAttribute('style', 'height: 30px;');

//   const startBtn = createEl('button');
//   startBtn.innerText = 'Get Started!';
//   startBtn.className = 'btn btn-primary btn-animated';
//   startBtn.setAttribute('data-modal-target', '#modal');
//   startBtn.addEventListener('click', () => {
//     openModal(modal);
//   });

//   welcomeDiv.append(title, spacerDiv, startBtn);
//   main.append(welcomeDiv);
// }

// function playSong(){
//   const bgm = document.getElementById('bgm')
//   bgm.src = './gameassets/audio/thit.mp3'
//   bgm.volume = 0.5
//   document.addEventListener('click', function(){
//     bgm.play()

//   })
// }
