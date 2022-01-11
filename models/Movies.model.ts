import {MovieType, MovieDetailsType, MoviesType, RatingType} from '../constants/API.types'
export class RatingModel {
    source: string
    value: string
    constructor(data: RatingType) {
        this.source = data.Source
        this.value = data.Value
    }
}

export class MovieModel {
    title: string;
    year: string;
    imdbID: string;
    type: string;
    poster: string;

    constructor(data: MovieType) {
        this.title = data.Title
        this.year = data.Year
        this.imdbID = data.imdbID
        this.type = data.Type
        this.poster = data.Poster
    }
}

export class MoviesModel {
    search: MovieModel[];
    totalResults: string;
    response: string;
    constructor(data: MoviesType) {
        this.search = data.Search.map(m => new MovieModel(m))
        this.totalResults = data.totalResults
        this.response = data.Response
    }
}

export class MovieDetailsModel {
    title: string;
    year: string;
    rated: string;
    released: string;
    runtime: string;
    genre: string;
    director: string;
    writer: string;
    actors: string;
    plot: string;
    language: string;
    country: string;
    awards: string;
    poster: string;
    ratings: RatingModel[];
    metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    type: string;
    dvd: string;
    boxOffice: string;
    production: string;
    website: string;
    response: string;
    constructor(data: MovieDetailsType) {
        this.title = data.Title
        this.year = data.Year
        this.rated = data.Rated
        this.released = data.Released
        this.runtime = data.Runtime
        this.genre = data.Genre
        this.director = data.Director
        this.writer = data.Writer
        this.actors = data.Actors
        this.plot = data.Plot
        this.language = data.Language
        this.country = data.Country
        this.awards = data.Awards
        this.poster = data.Poster
        this.ratings = data.Ratings.map(r => new RatingModel(r))
        this.metascore = data.Metascore
        this.imdbRating = data.imdbRating
        this.imdbVotes = data.imdbVotes
        this.imdbID = data.imdbID
        this.type = data.Type
        this.dvd = data.DVD
        this.boxOffice = data.BoxOffice
        this.production = data.Production
        this.website = data.Website
        this.response = data.Response
    }
}
