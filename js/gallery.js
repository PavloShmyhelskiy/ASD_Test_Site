const main = document.getElementById("main");

const images = [...document.getElementsByClassName('wallpaper')];

images.forEach(image => {
    image.addEventListener('click', (event) => {
        images.forEach((i) => {
            i.style['border-color'] = "transparent"
        })
        main.style['background-image'] = `url('${image.src}')`;
        image.style['border-color'] = "grey"
    })
})

images[0].click();