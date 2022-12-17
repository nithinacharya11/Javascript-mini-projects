const profiles = [
    {
        img:"https://images.news18.com/ibnlive/uploads/2022/09/rohit-sharma-angry-ap.jpg",
        name:"Rohit Sharma",
        role:"Batsman",
        description: "Rohit sharma, also known as vadadpav sharma is a limited overs giant"
    },
    {
        img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/ravindra_jadeja_reuters-three_four.jpg?VersionId=pqIP.NR0EzYnRDioxHwoT6PYQTbrTVP5",
        name:"Ravindra Jadeja",
        role:"All-rounder",
        description: "Jadeja is a proper 3 dimensional cricketer"
    },
    {
        img:"https://m.economictimes.com/thumb/height-450,width-600,imgsize-50992,msid-94637024/gutted-that-i-wont-be-part-of-t20-world-cup-jasprit-bumrah.jpg",
        name:"Jasprit Bumrah",
        role:"Bowler",
        description: "Bumrah is a wicket taking machine"
    },
    {
        img:"https://i.timesnowhindi.com/stories/expression_shastri.jpg?tr=w-560,h-292,fo-top",
        name:"Ravi Shastri",
        role:"Coach",
        description: "Always drunk, old monk is his primary weapon"
    }
    
]

const img = document.querySelector('.image');
const name = document.querySelector('.name');
const role = document.querySelector('.role');
const description = document.querySelector('.description');

const prevBtn = document.querySelector('.previous');
const randomBtn = document.querySelector('.random');
const nextBtn = document.querySelector('.next');

let profileCount = 0;

window.addEventListener('DOMContentLoaded',function (){
    const item = profiles[profileCount];
    img.src = item.img;
    name.textContent = item.name;
    role.textContent = item.role;
    description.textContent = item.description;
})



function showProfile(x){
    const item = profiles[x];
    img.src = item.img;
    name.textContent = item.name;
    role.textContent = item.role;
    description.textContent = item.description;
}

nextBtn.addEventListener('click', function(){
    profileCount++;
    if(profileCount > profiles.length - 1){
        profileCount = 0;
    }
    showProfile(profileCount)
});

prevBtn.addEventListener('click', function(){
    profileCount--;
    if(profileCount < 0){
        profileCount = profiles.length - 1;
    }
    showProfile(profileCount)
});

randomBtn.addEventListener('click', function(){
    profileCount = Math.floor(Math.random() * profiles.length);
    showProfile(profileCount);
})