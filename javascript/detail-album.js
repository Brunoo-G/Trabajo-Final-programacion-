window.addEventListener("load", function(){

    const proxy = 'https://cors-anywhere.herokuapp.com/';

    let idAlbum = devolver_album_id();

    function devolver_album_id(){
        let url_string = window.location.href;
        let url = new URL(url_string);
        return url.searchParams.get("id");
    };

    mostrar_info_album(idAlbum);
    mostrar_canciones_album(idAlbum);

    function mostrar_info_album(idAlbum){

        let api_url = `${proxy}https://api.deezer.com/album/${idAlbum}`;
        
        fetch(api_url)
            .then(function (response){
                return response.json();
            })
            .then(function (datos){
                let album_1 = document.querySelector('#album_1');
                album_1.innerHTML += `
                <div>
                    <img src="${datos.cover_big}"><h2>Artista:  ${datos.artist.name}</h2><h2>Titulo del album:  ${datos.title}</h2>
                    <h2>Año de publicacion:  ${datos.release_date}</h2><h2>Genero:  ${datos.genres.data[0].name}</h2>
                </div>`;
            })
            .catch(function(error){
                console.log("el error es:" + error);
            });
    }

    function mostrar_canciones_album(idAlbum){

        let api_url = `${proxy}https://api.deezer.com/album/${idAlbum}`;

        fetch(api_url)
            .then(function (response){
                return response.json();
            })
            .then(function (datos){
                for(i=0; i<= 10; i++){
                    document.querySelector('#lista_canciones').innerHTML += `
                    <div class="canciones" id="cancion_${i}">
                        <img src="${datos.cover_medium}">
                        <h2>${i+1} - ${datos.tracks.data[i].title}</h2>
                    </div>`;
                }
            })
            .catch(function(error){
                console.log("el error es:" + error);
            });
    }










});
