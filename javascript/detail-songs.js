window.addEventListener("load", function(){

    const proxy = 'https://cors-anywhere.herokuapp.com/';

    let queryString = location.href;
    let queryStringObj = new URLSearchParams(queryString);
    let trakElegido = queryStringObj.get("id");

    fetch (`${proxy}https://api.deezer.com/track/${trakElegido}`)
        .then(function (response){
            return response.json();
        })
        .then (function(datos){
            console.log(datos);
            document.querySelector("detalle-cancion").innerHTML = `<div><h2>${datos.title}</h2></div>`
        })
        .catch(function(error){
            console.log("el error es:" + error)
        })

});