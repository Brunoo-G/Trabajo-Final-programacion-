window.addEventListener("load", function(){

    const proxy = 'https://cors-anywhere.herokuapp.com/';

    let queryString = location.href;
    let queryStringObj = new URL(queryString);
    let trakElegido = queryStringObj.get("id");
     
    console.log(queryStringObj)

    fetch (`${proxy}https://api.deezer.com/track/${trakElegido}`)
        .then(function (response){
            return response.json();
        })
        .then (function(datos){
            console.log(datos);
            let cancion = document.getElementById("detalle_cancion")
            cancion.innerHTML = `<h2>${datos.title}</h2>`
        })
        .catch(function(error){
            console.log("el error es:" + error)
        })

});