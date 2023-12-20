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
})
