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

  //   changingContainer.innerHTML = '';

  //   let spacerDiv = document.createElement('div');
  //   spacerDiv.setAttribute('style', 'height: 20px;');

  //   let bigSpacerDiv = document.createElement('div');
  //   bigSpacerDiv.setAttribute('style', 'height: 30px;');

  //   let changingContainerCol = createEl('div');
  //   changingContainerCol.setAttribute('class', 'col text-center');

  //   let logInForm = createEl('form');
  //   logInForm.setAttribute('id', 'log-in-form');

  //   let userNameDiv = createEl('div');
  //   let userNameInput = createEl('input');
  //   userNameInput.setAttribute('class', 'input mt-2');
  //   userNameInput.setAttribute('placeholder', 'Username');
  //   userNameInput.name = 'username';
  //   userNameDiv.append(userNameInput);

  //   let passwordDiv = createEl('div');
  //   let passwordInput = createEl('input');
  //   passwordInput.setAttribute('placeholder', 'Password');
  //   passwordInput.setAttribute('class', 'input mt-2');
  //   passwordInput.name = 'password';
  //   passwordDiv.append(passwordInput);

  //   let logInBtn = createEl('button');
  //   logInBtn.setAttribute('class', 'btn-md btn-primary mt-2');
  //   logInBtn.innerText = 'LogIn';

  //   let signUpDiv = createEl('div');
  //   signUpDiv.setAttribute('id', 'sign-up-div');

  //   let signUpH4 = createEl('h4');
  //   signUpH4.innerText = "Don't Have An Account?";

  //   let signUpBtn = createEl('button');
  //   signUpBtn.setAttribute('class', 'btn-md btn-primary');
  //   signUpBtn.innerText = 'Sign Up!';

  //   signUpDiv.append(signUpH4, signUpBtn);
  //   logInForm.append(userNameDiv, passwordDiv, logInBtn);
  //   changingContainerCol.append(bigSpacerDiv, logInForm, spacerDiv, signUpDiv);
  //   changingContainer.append(changingContainerCol);

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
