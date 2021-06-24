window.addEventListener("load", function(){

    const proxy = 'https://cors-anywhere.herokuapp.com/';

    /* Lista de generos y eventos */ 

    fetch(`${proxy}https://api.deezer.com/genre`)
        .then(function (response){
            return response.json();
        })
        .then (function(datos){
            console.log(datos);
            document.querySelector('#genero_1').innerHTML = `<a href="detail-genres.html?id=${datos.data[2].id}"><h2>${datos.data[2].name}</h2></a>`;
            document.querySelector('#genero_1').addEventListener('click' , function(){
                localStorage.setItem('rap', JSON.stringify(`${datos.data[2].name}`));
            });
        })
        .catch(function(error){
            console.log("el error es:" + error)
        });

    fetch(`${proxy}https://api.deezer.com/genre`)
        .then(function (response){
            return response.json();
        })
        .then (function(datos){
            console.log(datos);
            document.querySelector('#genero_2').innerHTML = `<a href="detail-genres.html?id=${datos.data[3].id}"><h2>${datos.data[3].name}</h2></a>`;
            document.querySelector('#genero_2').addEventListener('click' , function(){
                localStorage.setItem('reggaeton', JSON.stringify(`${datos.data[3].name}`));
            });
        })
        .catch(function(error){
            console.log("el error es:" + error)
        });
    
    fetch(`${proxy}https://api.deezer.com/genre`)
        .then(function (response){
            return response.json();
        })
        .then (function(datos){
            console.log(datos);
            document.querySelector('#genero_3').innerHTML = `<a href="detail-genres.html?id=${datos.data[19].id}"><h2>${datos.data[19].name}</h2></a>`;
            document.querySelector('#genero_3').addEventListener('click' , function(){
                localStorage.setItem('funk', JSON.stringify(`${datos.data[19].name}`));
            });
        })
        .catch(function(error){
            console.log("el error es:" + error)
        });
    
    fetch(`${proxy}https://api.deezer.com/genre`)
        .then(function (response){
            return response.json();
        })
        .then (function(datos){
            console.log(datos);
            document.querySelector('#genero_4').innerHTML = `<a href="detail-genres.html?id=${datos.data[5].id}"><h2>${datos.data[5].name}</h2></a>`;
            document.querySelector('#genero_4').addEventListener('click' , function(){
                localStorage.setItem('dance', JSON.stringify(`${datos.data[5].name}`));
            });
        })
        .catch(function(error){
            console.log("el error es:" + error)
        });

    fetch(`${proxy}https://api.deezer.com/genre`)
        .then(function (response){
            return response.json();
        })
        .then (function(datos){
            console.log(datos);
            document.querySelector('#genero_5').innerHTML = `<a href="detail-genres.html?id=${datos.data[1].id}"><h2>${datos.data[1].name}</h2></a>`
            document.querySelector('#genero_5').addEventListener('click', function(){
                localStorage.setItem('pop', JSON.stringify(`${datos.data[1].name}`));
            })
        })
        .catch(function(error){
            console.log("el error es:" + error)
        });

});

