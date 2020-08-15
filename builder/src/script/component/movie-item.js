class MovieItem extends HTMLElement {

    constructor() {
        super();
    }

    set movie(movie) {
        this.render(movie);
    }

    render(movie) {
      let poster = "";
      if (movie.poster_path) {
        poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      } else {
        poster = "https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg";
      }

      this.innerHTML = `
        <article class="movie">
         <figure class="cover">
           <img class="poster" src="${poster}" alt="Movie Poster">
         </figure>
         <div class="movie-info">
           <h2>${movie.title}</h2>
           <p>${movie.overview}</p>
         </div>
        </article>
      `;
    }
}

customElements.define("movie-item", MovieItem);
