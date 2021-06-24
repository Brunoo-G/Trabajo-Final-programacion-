window.addEventListener("load", function(){

    let queryString = location.search
    let queryStringObj = new URLSearchParams(queryString)
    let resultadoDeBusqueda = queryStringObj.get("busqueda")

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    
    if (resultadoDeBusqueda != null){

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
                        <a href="" ><h1>Canciones</h1></a>
                        </li> 
                        
                        <li>
                        <a href="detail-artist.js?id=${datos.data[0].artist.id}"" ><h1>Album</h1></a>
                        </li>
                    </ul> 
                </div>`;
            })
            .catch(function(error){
                console.log("el error es:" + error)
            })

            if (resultadoDeBusqueda == "") {
                this.alert("Debes escribir algo!");
            }else if (resultadoDeBusqueda.length <= 3)
                    this.alert("Debes escribir al menos tres caracteres!");

    }
});

