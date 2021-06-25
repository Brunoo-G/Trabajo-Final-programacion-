window.addEventListener('load', function () {
	const proxy = 'https://cors-anywhere.herokuapp.com/';
	let api = `${proxy}https://api.deezer.com/artist/queen`;
	// let endpoint_artistas = `${proxy}___________________`;

	let tracks= window.localStorage.getItem("tracks")

    if(tracks){
        tracks=  tracks.split(',');
    }else{
        tracks=  [];
    }

    for(i = 0; i < tracks.length; i++){
        let url = `${proxy}https://api.deezer.com/track/${tracks[i]}`;
                
        fetch(url)
            .then(function (response){
                return response.json();
            })
            .then (function(datos){
               
                let playlists = document.getElementById("playlist_canciones");
             
                playlists.innerHTML +=`<div class="canciones" id="cancion_${i}">
                <a href="detail-songs.html?id=${datos.id}"><img src="${datos.album.cover_medium}"></a>
                <h2>${datos.title}</h2>
                <div><a href="#" id="reproducir_${i}" data="${datos.id}">Reproducir</a>
                </div>`; 
                
            })
            .catch(function(error){
                console.log("el error es:" + error)
            });
    }
   		
});
