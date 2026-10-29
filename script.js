document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        { name: 'Veigh', image: './assets/artista-veigh.png'},
        { name: 'G.A', image: './assets/artista-g_a.png'},
        { name: 'J-Vila', image: './assets/artista-jvila.png'},
        { name: 'Gabriel Rocha', image: './assets/artista-gabrielarocha.png'},
        { name: 'MC IG', image: './assets/artista-ig.png'}
    ];

    const albumsData = [
        { name: 'Dos Prédios', artist: 'Veigh', image: './assets/album-dos-predios.png'},
        { name: 'Eu Venci o Mundo', artist: 'Veigh', image: './assets/album-evom.png'},
        { name: 'Eu Venci o Mundo (Ao Vivo)', artist: 'Veigh', image: './assets/album-evom-last-dance.png'},
        { name: 'Porque elas preferem os Canalhas', artist: 'G.A', image: './assets/album-canalha.png'},
        { name: 'Bad Boys', artist: 'MC IG', image: './assets/album-badboys.png'}
    ];

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistsData.forEach( artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="imagem do ${artist.name}">
            <h3>${artist.name}</h3>
            <p>artista</p>
        `

        artistGrid.appendChild(artistCard)
    })

    albumsData.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
            <img src="${album.image}" alt="imagem do ${album.name}">
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
        `

        albumsGrid.appendChild(albumCard)
    })

})


