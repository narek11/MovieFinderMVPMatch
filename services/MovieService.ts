import axios from 'axios'
import {baseURL} from '../constants/API'

//By ID
export const searchByID = async (id: string) => {
    const url = `${baseURL}&i=${id}&plot=full`
    const result =  await axios.get(url)

    return result.data
}

//By Title
export const searchByTitle = async (title: string) => {
    const url = `${baseURL}&s=${title}`
    const result =  await axios.get(url)

    return result.data
}
