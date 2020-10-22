const renderLogIn = () => {
  const title = document.querySelector('.title');
  title.innerText = 'Login';
  const modalBody = document.querySelector('.modal-body');

  const logInForm = document.createElement('form');
  const nameLabel = document.createElement('label');
  const userNameInput = document.createElement('input');
  const passLabel = document.createElement('label');
  const passwordInput = document.createElement('input');
  const submit = document.createElement('button');

  logInForm.className = 'user-form';
  nameLabel.innerText = 'Username';
  userNameInput.className = 'fInput';
  userNameInput.type = 'text';
  userNameInput.name = 'username';
  userNameInput.setAttribute('placeholder', 'Username');
  passLabel.innerText = 'Password';
  passwordInput.className = 'fInput';
  passwordInput.setAttribute('placeholder', 'Password');
  passwordInput.type = 'password';
  passwordInput.name = 'password';
  submit.type = 'submit';
  submit.innerText = 'Login';

  logInForm.append(nameLabel, userNameInput, passLabel, passwordInput, submit);
  modalBody.append(logInForm);

  logInForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // console.log(e.target.username.value);
    fetch(urlPrefix + `users/login/${e.target.username.value}`)
      .then(res => res.json())
      .then(user => renderHomePage(user[0]));
  });

  //   signUpBtn.addEventListener('click', function() {
  //     renderSignUpForm();
  //   });
};
