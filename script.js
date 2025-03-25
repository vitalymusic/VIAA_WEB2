let dialogBtn1 = document.querySelector("#dialog_btn1");
let dialogBtn2 = document.querySelector("#dialog_btn2");
let dialogBtn3 = document.querySelector("#dialog_btn3");
let dialogCloseBtn = document.querySelector("#modal1 button");

let modal = document.querySelector("#modal1");


dialogBtn1.onclick = function(event){
    event.preventDefault();
    modal.style.display = "flex";  
}

dialogCloseBtn.onclick = function(event){
    // event.preventDefault();
    event.target.parentElement.parentElement.style.display = "none"; 


}
