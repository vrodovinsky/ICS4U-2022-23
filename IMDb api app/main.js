const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5b3bc5c527msh8cd399941cf71a1p148b53jsnb70552a05150',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game', options)
    .then(response => response.json())
    .then(data => {
        const list = data.d

        list.map((item) => {
            const name = item.l
            const poster = item.i.imageUrl
            const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
            const movies = document.querySelector('.movies').innerHTML += movie
        })
    })
    .catch(err => console.error(err));