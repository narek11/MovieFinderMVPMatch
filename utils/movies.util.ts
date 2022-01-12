import {MovieModel} from '../models/Movies.model'

const ignoreFavourites = (favouriteMovies: MovieModel[], movies: MovieModel[]): MovieModel[] => {
    const ids = favouriteMovies.map((m: MovieModel) => m.imdbID)
    return movies.filter((m: MovieModel) => !ids.includes(m.imdbID))
}

const ignoreHiddens = (hiddenIDs: string[], movies: MovieModel[]): MovieModel[] => {
    return movies.filter((m: MovieModel) => !hiddenIDs.includes(m.imdbID))
}

export {ignoreFavourites, ignoreHiddens}