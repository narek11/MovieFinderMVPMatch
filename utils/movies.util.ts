import {MovieModel} from '../models/Movies.model'

const filterMovies = (excludedMovies: MovieModel[], movies: MovieModel[]): MovieModel[] => {
    const ids = excludedMovies.map((m: MovieModel) => m.imdbID)
    return movies.filter((m: MovieModel) => !ids.includes(m.imdbID))
}

const excludeMovies = (excludedIDs: string[], movies: MovieModel[]): MovieModel[] => {
    return movies.filter((m: MovieModel) => !excludedIDs.includes(m.imdbID))
}

export {filterMovies, excludeMovies}