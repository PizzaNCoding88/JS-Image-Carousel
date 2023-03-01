const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".previous");

nextBtn.addEventListener("click", () => {
    let currentSlide = document.querySelector(".active");
    let currentDot = document.querySelector(".on");
    if(currentSlide.classList.contains("last")){
        slideOnOff(currentSlide);
        currentSlide = document.querySelector(".first");
        slideOnOff(currentSlide);

        dotsOnOff(currentDot);
        currentDot = document.querySelector(".firstdot");
        dotsOnOff(currentDot);
    } else{
        const currentSlide = document.querySelector(".active");
        const nextSlide = currentSlide.nextElementSibling;
        const currentDot = document.querySelector(".on");
        const nextDot = currentDot.nextElementSibling;
        slideOnOff(currentSlide);
        slideOnOff(nextSlide);
        dotsOnOff(currentDot);
        dotsOnOff(nextDot);
    }
});


previousBtn.addEventListener("click", ()=>{
    let currentSlide = document.querySelector(".active");
    let currentDot = document.querySelector(".on");
    if(currentSlide.classList.contains("first")){
        slideOnOff(currentSlide);
        currentSlide = document.querySelector(".last");
        slideOnOff(currentSlide);
        dotsOnOff(currentDot);
        currentDot = document.querySelector(".lastdot");
        dotsOnOff(currentDot);
    } else{
        const currentSlide = document.querySelector(".active");
        const previousSlide = currentSlide.previousElementSibling;
        const currentDot = document.querySelector(".on");
        const previousDot = currentDot.previousElementSibling;
        slideOnOff(currentSlide);
        slideOnOff(previousSlide);
        dotsOnOff(currentDot);
        dotsOnOff(previousDot);
    }
});


function dotsOnOff(dot){
    dot.classList.toggle("on");
    dot.classList.toggle("off");
};

function slideOnOff(slide){
    slide.classList.toggle("active");
    slide.classList.toggle("disabled");
};
