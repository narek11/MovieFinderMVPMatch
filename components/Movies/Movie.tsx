import {StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native'
import * as React from 'react'

interface MovieType {
    title: string;
    poster: string;
    imdbID: string;
    addToFavourites: () => void;
    hideMovie: () => void;
    allowToFavour: boolean;
    onMoviePress: () => void;
    rating?: string;
    desc?: string;
}

const Movie = ({title, poster, addToFavourites, hideMovie, allowToFavour, onMoviePress, rating, desc}: MovieType) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onMoviePress}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                <Image source={{uri: poster}} style={styles.poster} resizeMode="cover"/>
                <TouchableOpacity onPress={hideMovie} style={{backgroundColor: 'white'}}>
                    <Text style={{color: 'black', fontSize: 15, padding: 5}}>Hide Movie</Text>
                </TouchableOpacity>

                {allowToFavour && (
                    <TouchableOpacity onPress={addToFavourites} style={{backgroundColor: 'white'}}>
                        <Text style={{color: 'purple', fontSize: 15, padding: 5}}>Favourite</Text>
                    </TouchableOpacity>
                )}
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.rating}>Rating <Text style={styles.ratingValue}>{rating}</Text></Text>
            <Text>{desc}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'pink',
        marginTop: 40
    },
    title: {
        color: 'blue',
        fontSize: 20
    },
    poster: {
        height: 200,
        width: 200
    },
    rating: {
        fontSize: 20
    },
    ratingValue: {
        fontWeight: 'bold'
    }
})

export default Movie