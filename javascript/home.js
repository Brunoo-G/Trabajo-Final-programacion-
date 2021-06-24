window.addEventListener("load", function(){

    const proxy = 'https://cors-anywhere.herokuapp.com/';

    /* Lista de artistas del home */ 
    let artistasFavoritos_id = [8706544,429675,11289472,288166,246791];
    mostrar_artitas_favoritos(artistasFavoritos_id);


    function mostrar_artitas_favoritos (array_artistas_favoritos){
        
        for(let i=0; i < array_artistas_favoritos.length; i++){
          
            let url = `${proxy}https://api.deezer.com/artist/${array_artistas_favoritos[i]}`;
                
            fetch(url)
                .then(function (response){
                    return response.json();
                })
                .then (function(datos){
                    html = `<a href="detail-artist.html?id=${datos.id}"><div class="artistas" id="artista_${i}"><img src="${datos.picture_medium}"><h2>${datos.name}</h2></div></a>`;
                    let ul = document.getElementById("lista_favoritos");
                    ul.innerHTML += html;
                  
                    
                })
                .catch(function(error){
                    console.log("el error es:" + error)
                });
        }  
    }

    /* Lista de Canciones del home */
    
    fetch(`${proxy}https://api.deezer.com/track/1124841682`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let cancion_1 = document.querySelector('#cancion_1')
        cancion_1.setAttribute("data", datos.id);
        cancion_1.innerHTML = `<a href="detail-songs.html?id=${datos.id}"><img src="${datos.album.cover_medium}"></a><h2>${datos.title}</h2>`;
    })
    .catch(function(error){
        console.log("el error es:" + error)
    });
    
    fetch(`${proxy}https://api.deezer.com/track/62724015`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let cancion_2 = document.querySelector('#cancion_2')
        cancion_2.setAttribute("data", datos.id);
        cancion_2.innerHTML = `<a href="detail-songs.html?id=${datos.id}"><img src="${datos.album.cover_medium}"></a><h2>${datos.title}</h2>`;
    })
    .catch(function(error){
        console.log("el error es:" + error)
    });
    
    fetch(`${proxy}https://api.deezer.com/track/1370066842`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let cancion_3 = document.querySelector('#cancion_3')
        cancion_3.setAttribute("data", datos.id);
        cancion_3.innerHTML = `<a href="detail-songs.html?id=${datos.id}"><img src="${datos.album.cover_medium}"></a><h2>${datos.title}</h2>`;
    })
    .catch(function(error){
        console.log("el error es:" + error)
    });
   
    fetch(`${proxy}https://api.deezer.com/track/1280165222`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        
        let cancion_4 = document.querySelector('#cancion_4')
        cancion_4.setAttribute("data", datos.id);
        cancion_4.innerHTML = `<a href="detail-songs.html?id=${datos.id}"><img src="${datos.album.cover_medium}"></a><h2>${datos.title}</h2>`;
    })
    .catch(function(error){
        console.log("el error es:" + error)
    });

    fetch(`${proxy}https://api.deezer.com/track/1390823292`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        let cancion_5 = document.querySelector('#cancion_5'); 
        cancion_5.setAttribute("data", datos.id);
        cancion_5.innerHTML = `<a href="detail-songs.html?id=${datos.id}"><img src="${datos.album.cover_medium}"></a><h2>${datos.title}</h2>`;
    })
    .catch(function(error){
        console.log("el error es:" + error)
    });

    /* Escuchar canciones en player */ 

     document.getElementById("cancion_5").addEventListener("click", function(){
        let player = document.getElementById("player");
        let trackid = this.getAttribute("data");
        player.src = `https://widget.deezer.com/widget/dark/track/${trackid}`;

    });
    document.getElementById("cancion_4").addEventListener("click", function(){
        let player = document.getElementById("player");
        let trackid = this.getAttribute("data");
        player.src = `https://widget.deezer.com/widget/dark/track/${trackid}`;

    });
    document.getElementById("cancion_3").addEventListener("click", function(){
        let player = document.getElementById("player");
        let trackid = this.getAttribute("data");
        player.src = `https://widget.deezer.com/widget/dark/track/${trackid}`;

    });
    document.getElementById("cancion_2").addEventListener("click", function(){
        let player = document.getElementById("player");
        let trackid = this.getAttribute("data");
        player.src = `https://widget.deezer.com/widget/dark/track/${trackid}`;

    });
    document.getElementById("cancion_1").addEventListener("click", function(){
        let player = document.getElementById("player");
        let trackid = this.getAttribute("data");
        player.src = `https://widget.deezer.com/widget/dark/track/${trackid}`;

    });

    /* Lista de Albumes del home */

    let albumes_favoritos_id = [217794942, 211423112, 82541262, 185413242, 182811182];
    mostrar_albumes_favoritos(albumes_favoritos_id);

    function mostrar_albumes_favoritos(array_albumes_favoritos){

        for (let i=0; i < array_albumes_favoritos.length; i++){

            fetch(`${proxy}https://api.deezer.com/album/${array_albumes_favoritos[i]}`)
                .then(function (response){
                    return response.json();
                })
                .then (function(datos){
                    document.querySelector("#lista_albumes").innerHTML += `
                    <a href="detail-album.html?id=${datos.id}">
                        <div class="albumes" id="album_${i}">
                            <img src="${datos.cover_medium}">
                            <h2>${datos.title}</h2>
                        </div>
                    </a>`;
                })
                .catch(function(error){
                    console.log("el error es:" + error);
                });

        }

    }

}); 