import axios from 'axios'
import {baseURL} from '../constants/API'
import {MovieDetailsModel, MovieModel, MoviesModel} from '../models/Movies.model'

//Get movie details
const getMovieByID = async (id: string): Promise<MovieDetailsModel> => {
    const url = `${baseURL}&i=${id}&plot=full`
    const response = await axios.get(url)

    return new MovieDetailsModel(response.data)
}

//Search for a movie
const searchMovieByTitle = async (title: string): Promise<MovieModel[]> => {
    const url = `${baseURL}&s=${title}`
    const response = await axios.get(url)

    return (new MoviesModel(response.data)).search
}

export {getMovieByID, searchMovieByTitle}
