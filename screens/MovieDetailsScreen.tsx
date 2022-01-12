import {ActivityIndicator, View, Button} from 'react-native'
import Movie from '../components/Movies/Movie'
import React, {useEffect, useState} from 'react'
import * as MovieService from '../services/MoviesService'
import {MovieDetailsModel} from '../models/Movies.model'

const MovieDetailsScreen = ({navigation, route}): JSX.Element => {
    const params = route.params || {};
    const imdbID = params.imdbID

    const [movieDetails, setMovieDetails] = useState<MovieDetailsModel>({})
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        const getMovie = async () => {
            setLoading(true)
            const details = await MovieService.getMovieByID(imdbID)
            setMovieDetails(details)
            setLoading(false)
        }

        getMovie()
    }, [])

    if (loading) {
        return (
            <ActivityIndicator/>
        )
    }
    return (
        <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Button onPress={() => navigation.goBack()} title="Dismiss" />
            <Movie
                key={movieDetails.imdbID}
                title={movieDetails.title}
                poster={movieDetails.poster}
                imdbID={movieDetails.imdbID}
                rating={movieDetails.ratings[0].value}
                desc={movieDetails.plot}
            />
        </View>
    )
}

export default MovieDetailsScreen