let count = 0;

const value = document.querySelector(".value");
const btn = document.querySelectorAll("button");

btn.forEach(function(item){
    item.addEventListener('click',calculateCount);
})

function calculateCount(e){
    if(e.currentTarget.classList.contains("decrease")){
        count--;
    }
    else if(e.currentTarget.classList.contains("increase")){
        count++;
    }
    else {
        count = 0;
    }
    value.textContent = count;
}
