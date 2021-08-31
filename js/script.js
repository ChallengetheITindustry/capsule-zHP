"use strict";


{
    const castleId = document.getElementById('castle-id');
    const backgroundImageId = document.getElementById('background-image-id');
    const body = document.querySelector('body');
    const cloudWhite1 = document.getElementById('cloud-white1')

    window.addEventListener('click', () => {
        castleId.classList.add('castle');
        castleId.classList.remove('castle-still');
        body.classList.add('body-background-image');
        body.classList.remove('body-color');
        cloudWhite1.classList.remove('cloud-white1-still');
        cloudWhite1.classList.add('cloud-white1');

    })
}