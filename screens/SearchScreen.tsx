import {useEffect, useState} from 'react'
import {StyleSheet, TextInput, View, ActivityIndicator} from 'react-native'
import {RootTabScreenProps} from '../types'
import * as MovieService from '../services/MoviesService'
import MovieList from '../components/Movies/MovieList'
import useMovieContext from '../contexts/MoviesContext'
import {filterMovies, excludeMovies} from '../utils/movies.util'
import {MovieModel} from '../models/Movies.model'

const SearchScreen = ({navigation}: RootTabScreenProps<'Search'>) => {
    const [movies, setMovies] = useState<MovieModel[]>([])
    const [text, setText] = useState<string>('harry')
    const {addToFavourites, favourites, hideMovie, hiddenIDs} = useMovieContext()

    const [loading, setLoading] = useState<boolean>(false)

    const _search = async () => {
        setLoading(true)
        const movies = await MovieService.searchMovieByTitle(text)
        setMovies(movies)
        setLoading(false)
    }

    if (loading) {
        return (
            <ActivityIndicator/>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput value={text} onChangeText={t => setText(t)} style={styles.input} onSubmitEditing={_search}/>
            </View>
            <View style={{flex: 1}}>
                <MovieList
                    allowToFavour
                    movies={excludeMovies(hiddenIDs, filterMovies(favourites, movies))}
                    addToFavourites={addToFavourites}
                    onMoviePress={(movie: MovieModel) => navigation.navigate('MovieDetailsModal', {imdbID: movie.imdbID})}
                    hideMovie={hideMovie}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchContainer: {
        flexDirection: 'row'
    },
    input: {
        height: 60,
        flex: 1,
        borderWidth: 1,
        borderColor: 'grey',
        fontSize: 20,
        paddingLeft: 20
    }
})

export default SearchScreen