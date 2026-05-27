// ADD MOVIES HERE

const movies = [

  {
    title: "Batman",
    image: "images/batman.jpg",
    page: "movie/batman.html"
  },

  {
    title: "Spider-Man",
    image: "images/spiderman.jpg",
    page: "movie/spiderman.html"
  },

  {
    title: "Avatar",
    image: "images/avatar.jpg",
    page: "movie/avatar.html"
  }

];



// MOVIE GRID

const moviesContainer =
document.getElementById("moviesContainer");

function displayMovies(movieList){

  moviesContainer.innerHTML = "";

  movieList.forEach(movie => {

    moviesContainer.innerHTML += `

      <a href="${movie.page}">

        <div class="movie-card">

          <img src="${movie.image}" alt="${movie.title}">

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
