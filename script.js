let dialogBtn1 = document.querySelector("#dialog_btn1");
let dialogBtn2 = document.querySelector("#dialog_btn2");
let dialogBtn3 = document.querySelector("#dialog_btn3");
let dialogCloseBtn = document.querySelector("#modal1 button");

let modal = document.querySelector("#modal1");

let modalData = [
    { 
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
        h3:"Kas ir HTML",
        p:"HTML (HyperText Markup Language) ir tīmekļa lapu struktūras veidošanas valoda, kas nosaka, kā saturs tiek organizēts un attēlots pārlūkprogrammā."
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
        h3:"Kas ir CSS",
        p:"CSS (Cascading Style Sheets) tiek izmantots, lai pievienotu stilu un dizainu HTML elementiem, piemēram, mainītu krāsas, fontus un izkārtojumu."
    },
   {
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
        h3:"Kas ir JavaScript",
        p:"JavaScript ir programmēšanas valoda, kas pievieno interaktivitāti un dinamisku funkcionalitāti tīmekļa lapām, piemēram, formu validāciju, animācijas un lietotāju darbību apstrādi."
    }
]
    let buttons = document.querySelectorAll("#saturs1 a");
    
    for(button of buttons){
        button.onclick = function(event){
            event.preventDefault();
            openModal(event.target.dataset.dialog)
        }
    }

// dialogBtn1.onclick = function(event){
//     event.preventDefault();
//     openModal(0);
// }
// dialogBtn2.onclick = function(event){
//     event.preventDefault();
//     openModal(1);
// }
// dialogBtn3.onclick = function(event){
//     event.preventDefault();
//     openModal(2);
// }

function openModal(number){
    modal.querySelector("img").src = modalData[number].img;
    modal.querySelector("h3").innerText = modalData[number].h3;
    modal.querySelector("p").innerText = modalData[number].p;
    modal.style.display = "flex";  
}



dialogCloseBtn.onclick = function(event){
    // event.preventDefault();
    event.target.parentElement.parentElement.style.display = "none"; 


}
