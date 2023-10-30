let moviesList = document.querySelector('.movies-list'),
    allMovies = document.querySelector('.main-row h2 span'),
    viewedMoviesH3 = document.querySelector('.main-row h3 span'),
    viewedMoviesH4 = document.querySelector('.main-row h4 span');
const data = [
    { id: 1, name: 'Oila uchun: 1-mavsum', views: 77, viewed: false, like: false },
    { id: 2, name: 'Oila uchun: 2-mavsum', views: 55, viewed: false, like: false },
    { id: 3, name: 'Oila uchun: 3-mavsum', views: 98, viewed: false, like: false },
];

data.forEach((Item) => {
    moviesList.innerHTML += `
        <div class="row movies-list-item oo  ${Item.viewed && 'viewed'}" id='m${Item.id}'>
            <div class="col-6 abs" >
                <h5  onclick="likke(${Item.id})" movieId="${Item.id}">${Item.name}</h5>
            </div>
            <div class="col-3" style="cursor:pointer;">
                <h5 movieId="${Item.id}">${Item.views}</h5>
            </div>
            <div class="col-3">
                <button class="btn btn-secondary vvBtn" onclick="vidf(${Item.id})" movieId="${Item.id}">Viewed</button>
                <button class="btn btn-secondary deleteBtn" >Delete </button>
                <button class="btn btn-secondary like abss" onclick="likke(${Item.id})" movieId="${Item.id}>like</button>
            </div>
        </div>
    `;
});

let mname = document.querySelector('.mname'),
    mvibe = document.querySelector('.mvibe'),
    addbutt = document.querySelector('.addbutt');


addbutt.addEventListener('click', (e) => {
    e.preventDefault();
    data.push({ id: data[data.length - 1].id + 1, name: mname.value, views: mvibe.value, viewed: false, like: false });
    let { id, name, views, viewed } = data[data.length - 1];

    let moviesListItemDiv = document.createElement('div');
    moviesListItemDiv.classList.add('row', 'movies-list-item', viewed && 'viewed');
    moviesListItemDiv.setAttribute('id', `m${id}`);
    moviesList.append(moviesListItemDiv);

    let col6Div = document.createElement('div');
    col6Div.classList.add('col-6');
    moviesListItemDiv.append(col6Div);

    let h5 = document.createElement('h5');
    h5.setAttribute('movieId', id);
    h5.setAttribute('onclick', `likke(${id})`);
    h5.textContent = name;
    col6Div.append(h5);

    let col3Div = document.createElement('div');
    col3Div.classList.add('col-3');
    moviesListItemDiv.append(col3Div);

    let h5_2 = document.createElement('h5');
    h5_2.setAttribute('movieId', id);
    h5_2.textContent = views;
    col3Div.append(h5_2);

    let col3Div_2 = document.createElement('div');
    col3Div_2.classList.add('col-3');
    moviesListItemDiv.append(col3Div_2);

    let btnViewed = document.createElement('button');
    btnViewed.classList.add('btn', 'btn-secondary', 'vvBtn', 'me-1');
    btnViewed.setAttribute('movieId', id);
    btnViewed.textContent = 'Viewed';
    btnViewed.setAttribute('onclick', `vidf(${id})`,)
    col3Div_2.append(btnViewed)



    let btnLike = document.createElement('button');
    btnLike.classList.add('btn', 'btn-secondary', 'like', 'ms-1');
    btnLike.textContent = 'like';
    col3Div_2.append(btnLike);

    allMovies.innerHTML = data.length;
    mname.value = '';
    mvibe.value = '';

})
allMovies.innerHTML += data.length;

let viewedMovies = data.filter(c => {
    if (c.viewed) {
        return c
    }
});


let viewedMoviess = data.filter(b => {
    if (b.like) {
        return b
    }
});
viewedMoviesH3.innerHTML += viewedMovies.length;
viewedMoviesH4.innerHTML += viewedMoviess.length;

let vvBtn = document.querySelectorAll('.vvBtn');
vvBtn.addEventListener('click', () => {
    let sM = document.querySelector(`#m${id}`);
    sM.classList.toggle('viewed')


})

function vidf(id) {
    let sM = document.querySelector(`#m${id}`);
    sM.classList.toggle('viewed');

    data.filter(e => {
        if (e.id == id) {
            e.viewed = !e.viewed


            return e;
        }
    });

    let viewedMovies = data.filter(c => {
        if (c.viewed) {
            return c
        }
    });


    viewedMoviesH3.innerHTML = viewedMovies.length;
}

let likedd = document.querySelectorAll('.abs');
likedd.addEventListener('click', () => {
    let sM = document.querySelector(`#m${id}`);
    sM.classList.toggle('likkee')


})

function likke(id) {
    let sM = document.querySelector(`#m${id}`);
    sM.classList.toggle('likeD');

    data.filter(e => {
        if (e.id == id) {
            e.like = !e.like
            return e
        }
    });
}

