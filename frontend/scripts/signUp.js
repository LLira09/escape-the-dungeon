const renderSignUpForm = ( ) => {
    console.log("We're signing up!")

    changingContainer.innerHTML = ''

    let signUpH3 = createEl('h3')
    signUpH3.setAttribute('class', 'h3 mt-3')
    signUpH3.innerText = "Create an Account"

    let spacerDiv = document.createElement('div')
    spacerDiv.setAttribute('style', 'height: 20px;')

    let bigSpacerDiv = document.createElement('div')
    bigSpacerDiv.setAttribute('style', 'height: 30px;')

    let changingContainerCol = createEl('div')
    changingContainerCol.setAttribute('class', 'col text-center')

    let signUpForm = createEl('form')
    signUpForm.setAttribute('id', 'log-in-form')

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

    let signUpBtn = createEl('button')
    signUpBtn.setAttribute('class', 'btn-md btn-primary mt-2')
    signUpBtn.innerText = 'Create Account'

    signUpForm.append(userNameDiv, passwordDiv, signUpBtn)
    changingContainerCol.append(signUpH3, signUpForm)
    changingContainer.append(changingContainerCol)

    signUpForm.addEventListener('submit', function(e){
        e.preventDefault()

        console.log(e.target.username.value)
        let userData = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        let userOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userData)
        }
        fetch(urlPrefix + 'users', userOptions)
        .then(res => res.json())
        .then(user => renderHomePage(user))
    })
}