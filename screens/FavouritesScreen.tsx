import {View} from 'react-native'
import {RootTabScreenProps} from '../types'
import MovieList from '../components/Movies/MovieList'
import {MovieModel} from '../models/Movies.model'
import useMovieContext from '../contexts/MoviesContext'
import {excludeMovies} from '../utils/movies.util'


const FavouritesScreen = ({navigation}: RootTabScreenProps<'Search'>) => {
    const {favourites, addToFavourites, hideMovie, hiddenIDs} = useMovieContext()

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <MovieList
                    movies={excludeMovies(hiddenIDs, favourites)}
                    addToFavourites={(movie: MovieModel) => addToFavourites(movie)}
                    hideMovie={hideMovie}
                    allowToFavour={false}
                    onMoviePress={(movie: MovieModel) => navigation.navigate('MovieDetailsModal', {imdbID: movie.imdbID})}
                />
            </View>
        </View>
    )
}

export default FavouritesScreen