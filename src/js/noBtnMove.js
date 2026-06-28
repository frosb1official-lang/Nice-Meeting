const noBtn = document.querySelector('#noBtn');
const wrapper = noBtn ? noBtn.closest('.container-wrapper') : null;

if (noBtn && wrapper) {
    noBtn.addEventListener('mouseenter', moveNoBtn);
    noBtn.addEventListener('click', moveNoBtn);
}

function moveNoBtn(e) {
    noBtn.style.position = 'absolute';

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const areaWidth = wrapper.clientWidth;
    const areaHeight = wrapper.clientHeight;

    const maxX = Math.max(0, areaWidth - btnWidth);
    const maxY = Math.max(0, areaHeight - btnHeight);

    const wrapperRect = wrapper.getBoundingClientRect();
    const borderLeft = wrapper.clientLeft;
    const borderTop = wrapper.clientTop;
    const mouseX = e ? e.clientX - wrapperRect.left - borderLeft : areaWidth / 2;
    const mouseY = e ? e.clientY - wrapperRect.top - borderTop : areaHeight / 2;

    let randomX, randomY;
    let attempts = 0;

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
