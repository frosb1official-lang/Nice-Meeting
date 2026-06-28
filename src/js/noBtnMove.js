const noBtn = document.querySelector('#noBtn');
if (noBtn) {
    noBtn.addEventListener('mouseenter', mouseEvent);
    noBtn.addEventListener('click', mouseEvent);
}

function mouseEvent(e) {
    noBtn.style.position = 'fixed';

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const padding = 20;
    const maxX = Math.max(0, window.innerWidth - btnWidth - padding);
    const maxY = Math.max(0, window.innerHeight - btnHeight - padding);

    let randomX, randomY;
    let attempts = 0;
    const mouseX = e ? e.clientX : window.innerWidth / 2;
    const mouseY = e ? e.clientY : window.innerHeight / 2;

    do {
        randomX = Math.random() * maxX;
        randomY = Math.random() * maxY;
        attempts++;
    } while (
        attempts < 100 &&
        mouseX >= randomX - 10 &&
        mouseX <= randomX + btnWidth + 10 &&
        mouseY >= randomY - 10 &&
        mouseY <= randomY + btnHeight + 10
    );

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}



