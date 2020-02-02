const BASE_API = 'https://yts.mx/api/v2/';

class Api {
    async getSuggestion(id) {
        /* 'fetch' devuelve una promesa, por eso es necesario poner el 'await' para que funcione de manera asíncrona */
        const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`)
        const { data } = await query.json();
        console.log(data);
        return data.movies
    }
    async getMovies() {
        const query = await fetch(`${BASE_API}list_movies.json`)
        const { data } = await query.json();
        console.log(data);
        return data.movies
    }
}

export default new Api();