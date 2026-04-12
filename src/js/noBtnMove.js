
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", () => {
    noBtn.style.position = 'absolute'
    const container = document.getElementById('questionScreen')

    const containerWidth = container.offsetWidth
    const containerHeight = container.offsetHeight

    const btnWidth = noBtn.offsetWidth
    const btnHeight = noBtn.offsetHeight

    const maxX = containerWidth - btnWidth - 20
    const maxY = containerHeight - btnHeight -20

    const randomX = Math.random() * maxX
    const randomY = Math.random() * maxY

    noBtn.style.left = randomX + 'px'
    noBtn.style.top = randomY + 'px'
});
