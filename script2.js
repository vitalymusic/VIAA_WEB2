let previewBtns = document.querySelectorAll(".skata_poga");

previewBtns.forEach(function(button){
    button.onclick = function(e){
        // return console.log("#"+e.target.dataset.content);
        document.querySelector("#"+e.target.dataset.content).classList.toggle("show");
    }
})