import {StatusBar} from 'expo-status-bar'
import {SafeAreaView} from 'react-native-safe-area-context'

import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import {MoviesProvider} from './contexts/MoviesContext'

export default function App() {
    const colorScheme = useColorScheme()

    return (
        <SafeAreaView style={{flex: 1, paddingHorizontal: 10, paddingTop: 10}}>
            <MoviesProvider>
                <Navigation colorScheme={colorScheme}/>
                <StatusBar/>
            </MoviesProvider>
        </SafeAreaView>
    )
}
