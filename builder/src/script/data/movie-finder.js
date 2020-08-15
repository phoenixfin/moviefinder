const key = "7439803926a1c8d0e4387da812ee0095";

class MovieFinder {
    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${keyword}&page=1&include_adult=false`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found`)
                }
            })
    }
}

export default MovieFinder;
