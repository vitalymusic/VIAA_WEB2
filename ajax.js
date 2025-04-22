// AJAX = XMLHttpRequest = Fetch API


// 1. Nolasīt JSON failu
// 2. Parvērst datus par JS Objektu
// 3. Izvadīt datus tabulas veidā



// fetch("data.json")
// .then(function(answer){
//     return answer.json();
// }).then(function(data){
//     datuIzvade(data);
// });


fetch("data.json")
.then((answer)=>{return answer.json()})
.then((data)=>{datuIzvade(data)})
.finally(()=>{
    console.log("dati ir ielādēti");
})


function datuIzvade(data){
    try{
    console.log(data)
    let tabula = document.querySelector("table.kursi");
    tabula.innerHTML+=`
            <tr>
                <td>Kursa nosaukums</td>
                <td>Kursa apraksts</td>
            </tr>
        `;    

    for(kurss of data.kursi){
        tabula.innerHTML+=`
            <tr>
                <td>${kurss.title}</td>
                <td>${kurss.description}</td>
            </tr>
        `;    
    }
}
catch(error){
    alert(error);
}
}



// Ārējie servisi API

// d27b3211

let API = "https://picsum.photos/v2/list";



fetch(API)
.then((answer)=>{return answer.json()})
.then((data)=>{bildes(data)})
.finally(()=>{
    console.log("Bildes ir ielādētas");
})

function bildes(data){
    console.log(data);

    for(bilde of data){
        document.querySelector('.galleryPicsum').innerHTML+=`
            <img src="${bilde.
                download_url}" width="100%">
        `;
    }

}



// Formu datu nosūtīšana ar JS


// 1. Jāatrod formas elements
// 2. Jāpastrādā formas nosūtīšanas notikums (Submit)
// 3. Formas datu atlase un nosūtīšana vaicājuma ķermenī (body)



let forma = document.querySelector("#contact_form");

forma.onsubmit = (e)=>{
    e.preventDefault();
    data = FormData(forma);

    fetch('https://www.formbackend.com/f/758f8c26094b0112',
        {
         headers: {    
         "accept": "application/javascript"
        },    
        method:"POST",
        body:data
        })
        .then((ans)=>{
            console.log(ans);    
            if(ans.status=="ok"){
                alert("Dati nosūtīti");
            }
        })




}
