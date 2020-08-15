import '../component/movie-shelf.js';
import '../component/search-bar.js';
import MovieFinder from '../data/movie-finder.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const shelfElement = document.querySelector("movie-shelf");

    const onButtonSearchClicked = async () => {
        try{
            const result = await MovieFinder.searchMovie(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult =  results => {
        shelfElement.movieList = results;
    };

    const fallbackResult = message => {
        shelfElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
