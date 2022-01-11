import {View} from 'react-native'
import {RootTabScreenProps, MovieType} from '../types'
import MovieList from '../components/Movies/MovieList'

import useMovieContext from '../contexts/MoviesContext'
import {excludeMovies} from '../utils/movies.util'


const FavouritesScreen = ({navigation}: RootTabScreenProps<'Search'>) => {
    const {favourites, addToFavourites, hideMovie, hiddenIDs} = useMovieContext()

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <MovieList
                    movies={excludeMovies(hiddenIDs, favourites)}
                    addToFavourites={(movie: MovieType) => addToFavourites(movie)}
                    hideMovie={hideMovie}
                    allowToFavour={false}
                />
            </View>
        </View>
    )
}

export default FavouritesScreen