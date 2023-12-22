document.addEventListener("DOMContentLoaded", ()=>{

const sidebar = document.querySelector(".sidebar");
const hamburger = document.querySelector(".icon");
const innerBurger = `<i class="bi bi-list"></i>`
hamburger.addEventListener("click",()=>{
    sidebar.classList.toggle("show")
    if(sidebar.classList.contains("show")){
        document.querySelector(".bi-list").style.backgroundColor = 'white'
        hamburger.innerHTML=innerBurger.replace('bi-list','bi-x')
    }else{
        hamburger.innerHTML=innerBurger
    }
})

let images = []
images[0]="img/portrait-young-girl-with-roller-blades.jpg"
images[1]="img/smiley-business-woman-front-view.jpg"
images[2]= "img/jjip_jm6e_230421.jpg"
images[3]="img/close-up-cute-child-portrait.jpg"
images[4]="img/8666599.jpg"
console.log(images);
const left = document.querySelector(".fa-angle-left")
const right = document.querySelector(".fa-angle-right")
const img = document.getElementById("img")
let currentIndex = 0
function uploadImg(){
    img.src = images[currentIndex]
}
right.addEventListener("click", ()=>{
    currentIndex++
    if(currentIndex > images.length-1){
        currentIndex = 0
    }uploadImg()
})

left.addEventListener("click", ()=>{
    currentIndex--
    if(currentIndex < 0){
        currentIndex = images.length-1
    }uploadImg()
})

uploadImg()
});



