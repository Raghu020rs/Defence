const body = document.querySelector('body');

body.addEventListener('click',(e) => {
    console.log(`X axis : ${e.clientX} , Y axis : ${e.clientY}`);

    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.textContent = "hi";
    const color = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff'];
    circle.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
    circle.style.left = `${e.clientX - 25}px`;
    circle.style.top = `${e.clientY - 25}px`;

    body.appendChild(circle);
        serTimeout(() => {
        circle.remove();
        }, 5000);
});