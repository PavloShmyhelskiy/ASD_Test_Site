const settings_window = document.getElementById("settings_window");

const settings_icon = document.getElementById("settings-icon");

settings_icon.addEventListener('click', (event) => {
    if(settings_window.style['display'] == 'none'){
        settings_window.style['display'] = 'block'
    } else {
        settings_window.style['display'] = 'none'
    }
    })