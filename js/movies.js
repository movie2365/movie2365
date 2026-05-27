// ADD MOVIES HERE

const movies = [

  {
    title: "Project Hail Mary",
    image: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw780%2FwLWvHcQz7N13DvSOTV7bHgwGXpT.jpg&output=webp&q=65&n=-1",
    page: "movie/1"
  },

  {
    title: "Backrooms",
    image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1200&auto=format&fit=crop",
    page: "movie/2"
  },

  {
    title: "Avatar",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1200&auto=format&fit=crop",
    page: "movie/avatar.html"
  }

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
