const createEl = (el) => {
    return document.createElement(el)
}

//info cards the pop up whenever character collides 
//with interactable object

const createInfoCard = (text) => {
    //make a div for the text
    //add a button that closes the div
    let infoDiv = createEl('div')
    infoDiv.className = 'info-card'

    let textP = createEl('p')
    textP.className = 'info'
    textP.innerText = text

    let closeBtn = createEl('button')
    closeBtn.className = 'close-btn'
    closeBtn.innerText = 'Close Window'
    closeBtn.addEventListener('click', function(e){
        infoDiv.remove()
    })
    infoDiv.append(textP, closeBtn)
    main.append(infoDiv)
}


