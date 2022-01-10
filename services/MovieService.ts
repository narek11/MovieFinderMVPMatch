import axios from 'axios'
import {baseURL} from '../constants/API'
import {SearchMoviesType, SingleMovieType} from '../types'

//By ID
export const searchByID = async (id: string): Promise<SingleMovieType> => {
    const url = `${baseURL}&i=${id}&plot=full`
    const result =  await axios.get(url)

    return result.data
}

//By Title
export const searchByTitle = async (title: string): Promise<SearchMoviesType> => {
    const url = `${baseURL}&s=${title}`
    const result =  await axios.get(url)

    return result.data
}
