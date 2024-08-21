const searchForm=document.querySelector('form');
const movieContainer=document.querySelector('.movie-container');
const inputBox=document.querySelector('.inputbox');

const getMovieinfo=async(movie)=>
{
    const myapikey='23a9e7f0';
    const url=`http://www.omdbapi.com/?apikey=${myapikey}&t=${movie}`;
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);
    showmoviedata(data);
}
// CRUD CREATE READ UPDATE DELETE
const showmoviedata=(data)=>
{
    movieContainer.innerHTML="";
    movieContainer.classList.remove("nobackgrd");
    const {Title,imdbRating,Genre,Released,RunTime,Actors,Plot,Poster}=data;
    //  const Title=data.Title   const imdb=data.imbd

    const movieElement=document.createElement('div');
    movieElement.classList.add('movie-info');
    movieElement.innerHTML=`<h2>${Title}</h2>
                            <p>Rating:${imdbRating}</p>`;

    const movieGenreElement=document.createElement('div');
    movieGenreElement.classList.add('movie-genre');
    Genre.split(",").forEach(element=>{
        const p=document.createElement('p');
        p.innerText=element;
        movieGenreElement.appendChild(p);
    });
    movieElement.appendChild(movieGenreElement);
    movieElement.innerHTML+=`<p>Released Data:${Released}</p>
                            <p>Duration :${RunTime}</p>
                            <p>Cast: ${Actors}</p>`;
    

    const movieposter=document.createElement('div');
    movieposter.classList.add('movie-poster');
    movieposter.innerHTML=`<img src="${Poster}"/>`;
    movieContainer.appendChild(movieposter);
    movieContainer.appendChild(movieElement); 
    
}

searchForm.addEventListener('submit',(e)=>
{
    e.preventDefault();
    const moviename=inputBox.value.trim();
    if(moviename!='')
    {
        getMovieinfo(moviename);
    }
    else
    {

    }
});