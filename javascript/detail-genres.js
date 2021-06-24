window.addEventListener("load", function(){
    
    const proxy = 'https://cors-anywhere.herokuapp.com/';

    let queryString = location.href
    let queryStringObj = new URLSearchParams(queryString)
    let generoElegido = queryStringObj.get("id") 


    fetch(`${proxy}https://api.deezer.com/genre/${generoElegido}/artists`)
        .then(function (response){
            return response.json();
        })
        .then (function(datos){
            console.log(datos);

            for(i=0; i < 5; i++){
            document.querySelector('.detalle_genero').innerHTML += `
            <div>
                <img src="${datos.data[i].picture_medium}">
                <h2>${datos.data[i].name}</h2>
            </div>`
            }
        })
        .catch(function(error){
            console.log("el error es:" + error)
    });

    



});