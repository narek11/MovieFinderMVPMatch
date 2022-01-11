import {createContext, useContext, useEffect, useState} from 'react'
import * as StorageService from '../services/StorageService'
import {MovieModel} from '../models/Movies.model'

interface MovieProviderType {
    children: JSX.Element
}

interface MoviesContextInterface {
    favourites: MovieModel[];
    addToFavourites: (mv: MovieModel) => void;
    hiddenIDs: string[];
    hideMovie: (mv: MovieModel) => void
}

const MoviesContext = createContext<MoviesContextInterface>({})

export const MoviesProvider = ({children}: MovieProviderType): JSX.Element => {
    const [favourites, setFavourites] = useState<MovieModel[]>([])
    const [hiddenIDs, setHiddenIDs] = useState<string[]>([])

    // const reset = () => {
    //     StorageService.setItem('favourites', [])
    //     StorageService.setItem('hiddenIDs', [])
    // }
    //restore favourites & hiddenIDs from local storage
    useEffect(() => {
        const rehydrate = async () => {
            const _favourites: MovieModel[] = await StorageService.getItem('favourites') || []
            const _hiddenIDs: string[] = await StorageService.getItem('hiddenIDs') || []
            setFavourites(_favourites)
            setHiddenIDs(_hiddenIDs)
        }

        rehydrate()
        // reset()
    }, [])

    const addToFavourites = (movie: MovieModel) => {
        //validation: ignore duplicates
        if (!favourites.find(m => m.imdbID === movie.imdbID)) {
            const _favourites: MovieModel[] = [...favourites, movie]
            setFavourites(_favourites)
            StorageService.setItem('favourites', _favourites)
        }
    }

    const hideMovie = (movie: MovieModel) => {
        const _hiddenIDs: string[] = [...hiddenIDs, movie.imdbID]
        setHiddenIDs(_hiddenIDs)
        StorageService.setItem('hiddenIDs', _hiddenIDs)
    }

    return (
        <MoviesContext.Provider value={{favourites, addToFavourites, hiddenIDs, hideMovie}}>
            {children}
        </MoviesContext.Provider>
    )
}//MovieProvider

export default (): MoviesContextInterface => useContext(MoviesContext)
