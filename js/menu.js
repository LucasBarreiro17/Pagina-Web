const botonmenu = document.querySelector('.menu');
const menu = document.querySelector('.menu-navegacion');
console.log(menu);
console.log(botonmenu);
botonmenu.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})
window.addEventListener('click', (e)=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != botonmenu){
        menu.classList.toggle("spread")
    }
})