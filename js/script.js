"use strict";


{
    const castleId = document.getElementById('castle-id');
    const backgroundImageId = document.getElementById('background-image-id');
    const body = document.querySelector('body');

    window.addEventListener('click', () => {
        castleId.classList.add('castle');
        castleId.classList.remove('castle-still');
        backgroundImageId.classList.add('background-image');
        body.classList.remove('body-color');
    })
}