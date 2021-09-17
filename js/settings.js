const settingsWindow = document.getElementById("settingsWindow");

const settingsIcon = document.getElementById("settingsIcon");

settingsIcon.addEventListener('click', (event) => {
    if(settingsWindow.style.display == 'none'){
        settingsWindow.style.display = 'block'
    } else {
        settingsWindow.style.display = 'none'
    }
    })
