let sliderData = [
    {
        id: 1,
        slideTitle: 'Kiberdrošība',
        slideImage: 'https://placehold.co/1200x400/orange/white',
        slideDescription: 'Kiberdrošība aizsargā datus un sistēmas pret kiberuzbrukumiem.',
        langIcon: 'lv',
    },
    {
        id: 2,
        slideTitle: 'психология',
        slideImage: 'https://placehold.co/1200x400/blue/white',
        slideDescription: 'Психология изучает поведение, мышление и эмоции человека в обществе.',
        langIcon: 'ru',
    },
    {
        id: 3,
        slideTitle: 'Business administration',
        slideImage: 'https://placehold.co/1200x400/grey/white',
        slideDescription: 'Business administration manages operations, finance, marketing, and strategy for organizations.',
        langIcon: 'en',
    }
];


function showSlides(data,element){
    document.querySelector(element).innerHTML = "";

    for(slider of data){
        document.querySelector(element).innerHTML += `
        <div class="slide animate__animated">
                <h3 class="slideTitle animate__animated animate__fadeOutDown">${slider.slideTitle}</h3>
                <img src="${slider.slideImage}" alt="${slider.slideTitle}">
                <p class="slideDesc">${slider.slideDescription}</p>
                <span class="langIcon"><img src="${slider.langIcon}.svg" alt=""></span>
                <button id="subscibe" data-course-id="${slider.id}">Pierakstīties uz kursu</button>
        </div>
    `;
    }
}

showSlides(sliderData,"#slider .center");

function showSlide(slideNumber){

    let slides = document.querySelectorAll(".slide");
    slides.forEach((slide)=>{
        slide.style.display="none";
        
    })

    slides[slideNumber].style.display="flex";
    slides[slideNumber].classList.add('animate__fadeIn');
    slides[slideNumber].classList.replace('animate__fadeOut','animate__fadeIn');
    slides[slideNumber].querySelector("img").onmouseover = (e)=>{
        console.log(e);
        slides[slideNumber].querySelector('h3').classList.replace('animate__fadeOutDown','animate__fadeInUp');
    }
    slides[slideNumber].querySelector("img").onmouseleave = ()=>{
        slides[slideNumber].querySelector('h3').classList.replace('animate__fadeInUp','animate__fadeOutDown');
    }

  
    

}

let activeSlide = 0;
showSlide(activeSlide);

let leftBtn = document.querySelector("#leftBtn");
let rightBtn = document.querySelector("#rightBtn");


rightBtn.onclick = ()=>{
    document.querySelector(".animate__fadeIn").classList.replace('animate__fadeIn','animate__fadeOut');
    activeSlide++;
    if(activeSlide > sliderData.length-1){
        activeSlide = 0;
    }
    setTimeout(()=>{
        showSlide(activeSlide)
    },500);

    console.log(activeSlide);
}


leftBtn.onclick = ()=>{
    document.querySelector(".animate__fadeIn").classList.replace('animate__fadeIn','animate__fadeOut');
    activeSlide--;
    if(activeSlide < 0){
        activeSlide = sliderData.length-1;
    }

    setTimeout(()=>{
        showSlide(activeSlide)
    },500);
    console.log(activeSlide);
}

