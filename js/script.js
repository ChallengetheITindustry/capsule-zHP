"use strict";


{

    let clicked = false;

    document.getElementById("transparentBtn").style.display = "none";
    const castleId = document.getElementById('castle-id');
    const backgroundImageId = document.getElementById('background-image-id');
    const body = document.querySelector('body');
    const cloudBlackStill = document.getElementById('cloud_black_still');
    const gakubuchi = doucment.getElementById('gakubuchi');

    window.addEventListener('click', () => {

        if (clicked == true) {
            console.log('すでにクリックしています')
            return;
        }
        castleId.classList.add('castle');
        castleId.classList.remove('castle-still');
        body.classList.add('body-background-image');
        body.classList.remove('body-color');
        console.log('クラスの追加と削除を行いました');
        cloudBlackStill.classList.add('cloud_black1');
        gakubuchi.classList.add('gakubuchi-remove');
        setTimeout(function() {
            cloudBlackStill.classList.remove('cloud_black_still');
            cloudBlackStill.style.display = 'none';
            console.log('黒い雲を削除しました☁')

        }, 1000)
        setTimeout(transparentBtn, 4000);

        clicked = true;

    })

    function transparentBtn() {
        const transparentBtn = document.getElementById("transparentBtn");
        transparentBtn.style.display = "block";
        console.log('透明ボタンを追加しました🚀');
    }

}