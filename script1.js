const nextBtn = document.querySelector(".next");

const previousBtn = document.querySelector(".previous");

nextBtn.addEventListener("click", () => {
    let currentSlide = document.querySelector(".active");
    if(currentSlide.classList.contains("last")){
        currentSlide.classList.toggle("active");
        currentSlide.classList.toggle("disabled");
        currentSlide = document.querySelector(".first");
        currentSlide.classList.toggle("active");
        currentSlide.classList.toggle("disabled");
    } else{
        const currentSlide = document.querySelector(".active");
        const nextSlide = currentSlide.nextElementSibling;
        currentSlide.classList.toggle("active");
        currentSlide.classList.toggle("disabled");
        nextSlide.classList.toggle("disabled");
        nextSlide.classList.toggle("active");
    }
});

previousBtn.addEventListener("click", ()=>{
    let currentSlide = document.querySelector(".active");
    if(currentSlide.classList.contains("first")){
        currentSlide.classList.toggle("active");
        currentSlide.classList.toggle("disabled");
        currentSlide = document.querySelector(".last");
        currentSlide.classList.toggle("active");
        currentSlide.classList.toggle("disabled");
    } else{
        const currentSlide = document.querySelector(".active");
        const previousSlide = currentSlide.previousElementSibling;
        currentSlide.classList.toggle("active");
        currentSlide.classList.toggle("disabled");
        previousSlide.classList.toggle("active");
        previousSlide.classList.toggle("disabled");
    }
});

