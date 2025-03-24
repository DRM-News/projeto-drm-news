let isLight = true

function lightModes () {
    
    document.body.classList.toggle('dark')
    
    document.getElementById('header').classList.toggle('header-dark')
    
    document.getElementById('options').classList.toggle('options-dark')
    
    document.getElementById('settings').classList.toggle('settings-dark')
    
    document.getElementById('itemOne').classList.toggle('way-item-dark')
    document.getElementById('itemTwo').classList.toggle('way-item-dark')
    document.getElementById('itemThree').classList.toggle('way-item-dark')

}

function settingsMenu () {

    const menu = document.getElementById('menu')

    const menuScreen = document.createElement('div')
    menuScreen.id = 'menuScreen'
    menuScreen.classList.add('settings-menu')
    
    const themeName = document.createElement('h3')
    themeName.innerText = 'Alterar Tema'

    const lineBreak = document.createElement('br')

    const btnTheme = document.createElement('button')
    btnTheme.innerHTML = '<strong>Alternar Claro/Escuro</strong>'
    btnTheme.classList.add('toggle-theme-button')
    btnTheme.addEventListener('click', lightModes)

    menuScreen.append(themeName, lineBreak , lineBreak , btnTheme)

    if(menu.children[0] == undefined) {

        menu.append(menuScreen)

    } else {

        menu.removeChild(menu.children[0])

    }

}

document.getElementById('settings').addEventListener('click', settingsMenu)