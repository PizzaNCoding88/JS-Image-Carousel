const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".previous");

nextBtn.addEventListener("click", () => {
    let currentSlide = document.querySelector(".active");
    let currentDot = document.querySelector(".on");
    if(currentSlide.classList.contains("last")){
        slideOnOff(currentSlide);
        currentSlide = document.querySelector(".first");
        slideOnOff(currentSlide);
    } else{
        const currentSlide = document.querySelector(".active");
        const nextSlide = currentSlide.nextElementSibling;
        slideOnOff(currentSlide);
        slideOnOff(nextSlide);
    }
});

previousBtn.addEventListener("click", ()=>{
    let currentSlide = document.querySelector(".active");
    if(currentSlide.classList.contains("first")){
        slideOnOff(currentSlide);
        currentSlide = document.querySelector(".last");
        slideOnOff(currentSlide);
    } else{
        const currentSlide = document.querySelector(".active");
        const previousSlide = currentSlide.previousElementSibling;
        slideOnOff(currentSlide);
        slideOnOff(previousSlide);
    }
});




function slideOnOff(slide){
    slide.classList.toggle("active");
    slide.classList.toggle("disabled");
};