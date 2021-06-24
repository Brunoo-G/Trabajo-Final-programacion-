window.addEventListener("load", function(){
    
    const proxy = 'https://cors-anywhere.herokuapp.com/';

    fetch(`${proxy}https://api.deezer.com/genre`)
        .then(function (response){
            return response.json();
        })
        .then (function(datos){
            console.log(datos);
            let generoElegido1 = JSON.parse(localStorage.getItem('rap'));
            document.querySelector('.detalleagenero').innerHTML = `<h1>${generoElegido1}</h1>`

            let generoElegido2 = JSON.parse(localStorage.getItem('reggaeton'));
            document.querySelector('.detalleagenero').innerHTML = `<h1>${generoElegido2}</h1>`
        })
        .catch(function(error){
            console.log("el error es:" + error)
    });

    



});