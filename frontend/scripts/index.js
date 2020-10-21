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
      if (e.target.innerHTML == 'Login') {
        renderLogIn();
      } else if (e.target.innerHTML == 'SignUp') {
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
  // renderLogIn()
});
