const renderLogIn = () => {
    changingContainer.innerHTML = ''

    let spacerDiv = document.createElement('div')
    spacerDiv.setAttribute('style', 'height: 20px;')

    let bigSpacerDiv = document.createElement('div')
    bigSpacerDiv.setAttribute('style', 'height: 30px;')

    let changingContainerCol = createEl('div')
    changingContainerCol.setAttribute('class', 'col text-center')

    let logInForm = createEl('form')
    logInForm.setAttribute('id', 'log-in-form')

    let userNameDiv = createEl('div')
    let userNameInput = createEl('input')
    userNameInput.setAttribute('class', 'input mt-2')
    userNameInput.setAttribute('placeholder', 'Username')
    userNameInput.name = 'username'
    userNameDiv.append(userNameInput)

    let passwordDiv = createEl('div')
    let passwordInput = createEl('input')
    passwordInput.setAttribute('placeholder', 'Password')
    passwordInput.setAttribute('class', 'input mt-2')
    passwordInput.name = 'password'
    passwordDiv.append(passwordInput)

    let logInBtn = createEl('button')
    logInBtn.setAttribute('class', 'btn-md btn-primary mt-2')
    logInBtn.innerText = 'LogIn'

    let signUpDiv = createEl('div')
    signUpDiv.setAttribute('id', 'sign-up-div')

    let signUpH4 = createEl('h4')
    signUpH4.innerText = "Don't Have An Account?"

    let signUpBtn = createEl('button')
    signUpBtn.setAttribute('class', 'btn-md btn-primary')
    signUpBtn.innerText = "Sign Up!"

    signUpDiv.append(signUpH4, signUpBtn)
    logInForm.append(userNameDiv, passwordDiv, logInBtn)
    changingContainerCol.append(bigSpacerDiv, logInForm, spacerDiv, signUpDiv)
    changingContainer.append(changingContainerCol)

    logInForm.addEventListener('submit', function(e){
        e.preventDefault()

        console.log(e.target.username.value)

        fetch(urlPrefix + `users/login/${e.target.username.value}`)
        .then(res => res.json())
        .then((user) => {
            if (user.length === 0) {
                renderSignUpForm()
            } else{
                renderHomePage(user)
            }
        })
    })

    signUpBtn.addEventListener('click', function(){
        renderSignUpForm()
    })

}