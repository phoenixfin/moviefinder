import './movie-item.js';


class MovieShelf extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set movieList(movies) {
        this.render(movies);
    }

    render(movies) {
        this.shadowDOM.innerHTML = `
          <style>
            .shelf {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-wrap: wrap;
              -ms-flex-wrap: wrap;
              flex-wrap: wrap;
              -webkit-box-align: baseline;
              -webkit-align-items: baseline;
              -ms-flex-align: baseline;
              align-items: baseline;
              margin: 100px auto;
              margin-top: 32px;
              width: 100%;
              padding: 16px;
            }

            .movie {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-orient: vertical;
              -webkit-box-direction: normal;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              margin-bottom: 40px;
              -webkit-box-flex: 1;
              -webkit-flex: 1 0 100%;
              -ms-flex: 1 0 100%;
              flex: 1 0 100%;
            }

            @media (min-width: 40rem) {
              .movie {
                -webkit-box-flex: 1;
                -webkit-flex: 1 0 50%;
                -ms-flex: 1 0 50%;
                flex: 1 0 50%;
              }
            }

            @media (min-width: 55rem) {
              .movie {
                -webkit-box-flex: 1;
                -webkit-flex: 1 0 25%;
                -ms-flex: 1 0 25%;
                flex: 1 0 25%;
              }
            }

            .cover {
              margin: 0;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-align: end;
              -webkit-align-items: flex-end;
              -ms-flex-align: end;
              align-items: flex-end;
              -webkit-box-flex: 1;
              -webkit-flex: 1;
              -ms-flex: 1;
              flex: 1;
              padding-right: 20px;
              padding-left: 20px;
            }

            .cover > .poster {
              max-width: 500px;
              height: auto;
            }

            .cover > .poster:hover {
              box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.18), 0 0px 12px 0 rgba(0, 0, 0, 0.15);
              opacity: 0.8;
            }

            .cover > a {
              display: block;
            }

            .movie-info {
              text-align: center;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-orient: vertical;
              -webkit-box-direction: normal;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-box-flex: 1;
              -webkit-flex: 1;
              -ms-flex: 1;
              flex: 1;
              max-width: 500px;
              border-top: 5px solid #eee;
              padding: 20px;
            }
          </style>
        `;

        const shelf = document.createElement("div");
        shelf.className = "shelf";

        function putMovie(movie) {
            const element = document.createElement("movie-item");
            element.movie = movie;
            shelf.appendChild(element);
        }

        movies.forEach(putMovie);
        this.shadowDOM.appendChild(shelf);
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("movie-shelf", MovieShelf);
