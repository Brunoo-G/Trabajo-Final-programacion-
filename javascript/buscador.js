window.addEventListener("load", function(){

    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
    let resultadoDeBusqueda = queryStringObj.get("busqueda");
    const proxy = 'https://cors-anywhere.herokuapp.com/';

    if (resultadoDeBusqueda != null) {
        fetch(`${proxy}https://api.deezer.com/search?q=${resultadoDeBusqueda}`)
            .then(function (response){
                return response.json();
            })
            .then (function(datos){
                console.log(datos);
                document.querySelector('.resultado').innerHTML = `
                <h2>${datos.data[0].artist.name}</h2>
                <div>
                    <img src="${datos.data[0].artist.picture_big}"> 
                    <ul>
                        <li>
                        <a ><h1>Canciones</h1></a>
                        </li> 
                        
                        <li>
                        <a href="detail-artist.html?id="${datos.data[0].artist.id}"><h1>Album</h1></a>
                        </li>
                    </ul> 
                </div>`;
            })
            .catch(function(error){
                console.log("el error es:" + error)
            })

           
    }
    document.getElementById("form-busqueda").addEventListener("submit", function(e){
        e.preventDefault();
        let textoBuscado = document.getElementById("busqueda-text").value;
        let tieneErrores = false;

        if (textoBuscado == "") {
            alert("Debes escribir algo!");
            tieneErrores = true;
         }else if (textoBuscado.length <= 3){
            tieneErrores = true;
            alert("Debes escribir al menos tres caracteres!");
        }
        
        if(!tieneErrores){
            this.submit();
        }
        
    });
});

