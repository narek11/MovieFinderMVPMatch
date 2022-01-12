import React from 'react'
import {Animated, FlatList, Text, View} from 'react-native'
import Movie from './Movie'
import {MovieModel} from '../../models/Movies.model'

interface MovieListType {
    movies: MovieModel[];
    hideMovie: (mv: MovieModel) => void;
    allowToFavour?: boolean;
    addToFavourites: (mv: MovieModel) => void;
    onMoviePress: (mv: MovieModel) => void;
    listEmptyMessage?: string;
}

const MovieList = ({movies, addToFavourites, hideMovie, onMoviePress, allowToFavour = true, listEmptyMessage}: MovieListType): JSX.Element => (
    <FlatList
        data={movies}
        renderItem={({item: movie}) => {
            return (
                <Movie
                    key={movie.imdbID}
                    title={movie.title}
                    poster={movie.poster}
                    imdbID={movie.imdbID}
                    addToFavourites={() => addToFavourites(movie)}
                    hideMovie={() => hideMovie(movie)}
                    allowToFavour={allowToFavour}
                    onMoviePress={() => onMoviePress(movie) }
                />
            )
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{listEmptyMessage}</Text>
        </View>}
    />
)

export default MovieList