const menu=document.getElementById("menu");

const btn=document.querySelector(".menu-btn");

btn.onclick=()=>{

menu.classList.toggle("active");

}
/* =========================
   GALLERY LIGHTBOX
========================= */

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = image.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

});
/* =========================
   SCROLL ANIMATION
========================= */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hiddenElements.forEach((el)=>observer.observe(el));
/*=========================
SCROLL TO TOP
=========================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
/*=========================
LOADER
=========================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1800);

});
/*=========================
HERO SLIDER
=========================*/

const slides = document.querySelectorAll(".hero-slider .hero-img");

let currentSlide = 0;

setInterval(()=>{

slides[currentSlide].classList.remove("active");

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

slides[currentSlide].classList.add("active");

},5000);
/*=========================
TYPING EFFECT
=========================*/

const text = "Premium Men's Fashion • Chandrapur";

const typing = document.getElementById("typing");

let i = 0;

function typeText(){

if(i < text.length){

typing.innerHTML += text.charAt(i);

i++;

setTimeout(typeText,70);

}

}

window.addEventListener("load",typeText);