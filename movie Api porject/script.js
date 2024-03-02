const searchform=document.querySelector('form')
const movieContainer=document.querySelector('.movie-container')
const inputBox=document.querySelector('#input-box');




//function to fetch movie details using omdb Api

async function getMovieInfo(movie){
    const apiKey="fbd55bec";
    const url=`http://www.omdbapi.com/?apikey=${apiKey}&t=${movie}`;
    
    const response=await fetch(url);
    const data=await response.json();

    
    showMoviedata(data)

}

// function to show movie data on screen
const showMoviedata=(data)=>{
    //use Destrustion assignment form object
    const {Title,imdbRating,Genre,Released,Runtime,Actors,Plot,Poster}=data;

    movieContainer.innerHTML=` <div class="movie-poster">
    <img src=${Poster}>
    </div>
    <div class="movie-details">
    <h1>${Title}</h1>
    <p class="rating">⭐${imdbRating}</p>
    
    <span >${Genre} </span>
                <span >${Genre[1]} </span>
                <span >${Genre[2]}</span>
   
    <h3 >Relessed Data: <span >${Released}</span></h3>
    <h3> Duration: <span>${Runtime}</span></h3>
    <h3>plot: <span>${Plot}</span></h3>
    <h3>Language: <span>${data.Language}</span></h3>
    <h3>Country: <span>${data.Country}</span></h3>

    
    </div>`
                         

}


//Adding event listener to search form

searchform.addEventListener('submit',function(elemant){
    elemant.preventDefault();
    const moviename=inputBox.value.trim();
    if(moviename !== ''){
        getMovieInfo(moviename);
    }
})