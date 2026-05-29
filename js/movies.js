// ADD MOVIES HERE

const movies = [

  {title: "Project Hail Mary", image: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw780%2FwLWvHcQz7N13DvSOTV7bHgwGXpT.jpg&output=webp&q=65&n=-1", page: "movie/1"},
  {title: "The Super Mario Galaxy Movie", image: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw780%2Fn5OWzWUgjl5r1VFbbx72cCgcj8X.jpg&output=webp&q=65&n=-1", page: "movie/2"},
  {title: "GOAT", image: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw780%2F6aAsTVPSsqyD2bqYfAnOdG9g4rF.jpg&output=webp&q=65&n=-1", page: "movie/3"},
  {title: "Michael", image: "https://m.media-amazon.com/images/M/MV5BYjBkZDdiNDctZmQ1OC00MWVkLWIwZTMtZjJmNzUyNDJlZGRhXkEyXkFqcGc@._V1_QL75_UX404_.jpg", page: "movie/4"},

];



// MOVIE GRID

const moviesContainer =
document.getElementById("moviesContainer");

function displayMovies(movieList){

  // CLEAR OLD MOVIES
  moviesContainer.innerHTML = "";

  // LOOP THROUGH MOVIES
  movieList.forEach(movie => {

    moviesContainer.innerHTML += `

      <a href="${movie.page}" class="movie-link">

        <div class="movie-card">

          <div class="movie-image-wrapper">

            <img
              src="${movie.image}"
              alt="${movie.title}"
              loading="lazy"
            >

          </div>

          <div class="movie-info">

            <div class="movie-title">
              ${movie.title}
            </div>

          </div>

        </div>

      </a>

    `;

  });

}



// LOAD MOVIES

displayMovies(movies);



// SEARCH

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("input", () => {

  const value =
  searchInput.value.toLowerCase();

  const filteredMovies =
  movies.filter(movie =>
    movie.title.toLowerCase().includes(value)
  );

  displayMovies(filteredMovies);

});
