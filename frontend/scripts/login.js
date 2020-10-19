const renderLogIn = () => {
    changingContainer.innerHTML = ''

    let changingContainerCol = createEl('div')
    changingContainerCol.setAttribute('class', 'col text-center')

    let logInForm = createEl('form')
    logInForm.setAttribute('id', 'log-in-form')

    let userNameDiv = createEl('div')
    let userNameInput = createEl('input')
    userNameInput.setAttribute('placeholder', 'Username')
    userNameInput.name = 'username'
    userNameDiv.append(userNameInput)

    let passwordDiv = createEl('div')
    let passwordInput = createEl('input')
    passwordInput.setAttribute('placeholder', 'Password')
    passwordInput.name = 'password'
    passwordDiv.append(passwordInput)

    let logInBtn = createEl('button')
    logInBtn.setAttribute('class', 'btn-md btn-primary')
    logInBtn.innerText = 'LogIn'

    logInForm.append(userNameDiv, passwordDiv, logInBtn)
    changingContainerCol.append(logInForm)
    changingContainer.append(changingContainerCol)

    logInForm.addEventListener('submit', function(e){
        e.preventDefault()

        console.log(e.target.username.value)

        fetch(urlPrefix + `users/login/${e.target.username.value}`)
        .then(res => res.json())
        .then((user) => {
            renderHomePage(user)
        })
    })

}