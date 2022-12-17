const btn = document.querySelector('button');
const color = ["red","blue","pink","purple","violet","gray","yellow","orange","brown","royalblue"];

btn.addEventListener('click',getColor)

function getColor(){
    randomColor = color[Math.floor(Math.random()*10)];
    document.body.style.backgroundColor = randomColor;
    const colorName = document.querySelector('.color-name');
    colorName.innerText = randomColor;
}