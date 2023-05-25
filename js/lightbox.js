const imagenes=document.querySelectorAll('.img-galeria')
const imagenLigth = document.querySelector('.agregar-imagen')
const contenedorLigth =document.querySelector('.imagen-light')
const botonmenu1 = document.querySelector('.menu');

imagenes.forEach(imagen =>{
imagen.addEventListener('click', ()=>{
aparecerImagen(imagen.getAttribute('src'));
} )
})

contenedorLigth.addEventListener('click',(e)=>{
   if(e.target !== imagenLigth){
    contenedorLigth.classList.toggle('show')
    imagenLigth.classList.toggle('showImage')
    botonmenu1.style.opacity = 1;
    imagenLigth.classList.toggle("clickeable")
   } else if (e.target === imagenLigth){
    if(imagenLigth.src.includes('STAAR')){
    window.location.href = "https://staar.com.uy";}
    else if (imagenLigth.src.includes('high'))
    window.location.href = "https://drive.google.com/file/d/1i-1njU2_YU-1KvHLyxlEdUKsi8hPV2e3/view?usp=share_link";
   }
})

const aparecerImagen = (imagen)=>{
    imagenLigth.src = imagen;
    console.log(imagenLigth.src);
    contenedorLigth.classList.toggle('show')
    imagenLigth.classList.toggle('showImage')
    botonmenu1.style.opacity = 0;
    imagenLigth.classList.toggle("clickeable")
    
}