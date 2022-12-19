const btn  = document.querySelector('.nav-toggle');
const list = document.querySelector('.links');

btn.addEventListener('click',function(){
    
    list.classList.toggle('show-links')
})