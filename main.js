const changeColorText = () => {
    const title = document.querySelector('.title');
    const text = document.querySelector(".text");
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    text.style.color = title.style.color;
    title.style.color = `#${randomColor}`;
}
document.getElementById("btn").addEventListener('click', changeColorText);