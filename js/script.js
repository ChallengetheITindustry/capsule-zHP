"use strict";


{

    document.getElementById("transparentBtn").style.display = "none";
    const castleId = document.getElementById('castle-id');
    const backgroundImageId = document.getElementById('background-image-id');
    const body = document.querySelector('body');

    window.addEventListener('click', () => {
        castleId.classList.add('castle');
        castleId.classList.remove('castle-still');
        body.classList.add('body-background-image');
        body.classList.remove('body-color');

        setTimeout(transparentBtn, 4000);

    })

    function transparentBtn() {
        const transparentBtn = document.getElementById("transparentBtn");
        transparentBtn.style.display = "block";
        console.log('透明ボタンを追加しました🚀');
    }

}