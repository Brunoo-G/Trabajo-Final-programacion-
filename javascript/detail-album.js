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
                album_1.innerHTML += `<img src="${datos.cover_big}"><h2>${datos.artist.name}</h2><h2>${datos.title}</h2><h2>${datos.release_date}</h2><h2>${datos.genres.data[0].name}</h2><h2>${datos.tracks.data[0].title}</h2>`;
            })
            .catch(function(error){
                console.log("el error es:" + error);
            });
    }

    // function mostrar_canciones_album(idAlbum){

    //     let api_url = `${proxy}https://api.deezer.com/album/${idAlbum}`;

    //     fetch(api_url)
    //         .then(function (response){
    //             return response.json();
    //         })
    //         .then(function (datos){
    //             for(i=0; i<= 4; i++){
    //                 document.querySelector('#lista_canciones').innerHTML += `
    //                 <div class="canciones" id="cancion_${i}">
    //                     <img src="${dato.cover_medium}">
    //                     <h2>${datos.tracks[i].title}</h2>
    //                 </div>`;
    //             }
    //         })
    //         .catch(function(error){
    //             console.log("el error es:" + error);
    //         });
    // }










});
