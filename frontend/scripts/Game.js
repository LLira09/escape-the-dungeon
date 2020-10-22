const startGame = (newGame) => {
    main.innerHTML = ''
    //create elements
    let gameCont = createEl('div')
    gameCont.setAttribute('id', 'game-container')
    gameCont.innerText = 'hi'

    playerCharId = newGame.character_id
    getCharacter(playerCharId)

    main.append(gameCont)

    // FUNCTIONS
    function getCharacter(id) {
        fetch(urlPrefix + `characters/${id}`)
        .then(res => res.json())
        .then(char => createSideInfoBar(char))
    }
    const createSideInfoBar = (charInfo) => {
        let sideInfoDiv = createEl('div')
        sideInfoDiv.className = 'game-div'
        sideInfoDiv.setAttribute('id', 'side-info-bar')

        let titleDiv = createEl('div')
        titleDiv.setAttribute('id', 'info-bar-title-container')
        let sideInfoTitle = createEl('h2')
        sideInfoTitle.setAttribute('id', 'info-bar-title')
        sideInfoTitle.innerText = "Menu"

        let statsDiv = createEl('div')
        statsTitleDiv.setAttribute('id', 'stats-div')
        let statsTitle = createEl('h3')
        sideInfoTitle.setAttribute('id', 'stats-title')
        sideInfoTitle.innerText = "Stats"
        let statsList = createEl('ul')
        statsList.setAttribute('id', 'stats-list')
        


    }
    const createStoryContainer = (storyObj) => {

        //storyObj = {
        //    story: 'string of words',
        //    items: [],
        //    choices: []
        //}
    }
}

// layout = [
//     0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
//     0, 0, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 
//     0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 
//     0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 
//     0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 0, 0, 
//     0, 1, 1, 0, 1, 1, 0, 1, 1, 3, 3, 3, 3, 3, 0, 0, 0, 1, 0, 0, 
//     0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 
//     0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 
//     0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 
//     0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 5, 0, 0, 0, 0, 1, 0, 0, 
//     0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 0, 
//     0, 1, 0, 0, 0, 1, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 
//     0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 
//     0, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
// ]