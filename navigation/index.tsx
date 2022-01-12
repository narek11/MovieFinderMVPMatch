import {FontAwesome, Octicons} from '@expo/vector-icons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import * as React from 'react'
import {ColorSchemeName} from 'react-native'

import FavouritesScreen from '../screens/FavouritesScreen'
import SearchScreen from '../screens/SearchScreen'
import MovieDetailsScreen from '../screens/MovieDetailsScreen'
import {RootStackParamList, RootTabParamList} from '../types'

export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator/>
        </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}}/>
            <Stack.Group screenOptions={{presentation: 'modal'}}>
                <Stack.Screen name='MovieDetailsModal' component={MovieDetailsScreen} options={{title: 'Movie Details'}}/>
            </Stack.Group>
        </Stack.Navigator>
    )
}

const BottomTab = createBottomTabNavigator<RootTabParamList>()

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            initialRouteName="Favourites"
            screenOptions={{
                headerShown: false
            }}>
            <BottomTab.Screen
                name="Favourites"
                component={FavouritesScreen}
                options={{
                    title: 'Favourites',
                    tabBarIcon: ({color}) => <FontAwesome name="star" size={25} color={color}/>
                }}
            />
            <BottomTab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    title: 'Search',
                    tabBarIcon: ({color}) => <Octicons name="search" size={25} color={color}/>
                }}
            />
        </BottomTab.Navigator>
    )
}