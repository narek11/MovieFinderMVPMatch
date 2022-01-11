import {StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native'
import {MoviesModel} from '../../models/Movies.model'
import * as React from 'react'

interface MovieType {
    title: string;
    poster: string;
    imdbID: string;
    addToFavourites: () => void;
    hideMovie: () => void;
    allowToFavour: boolean;
}

const Movie = ({title, poster, imdbID, addToFavourites, hideMovie, allowToFavour}: MovieType) => {
    return (
        <TouchableOpacity style={styles.container}>
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
    }
})

export default Movie