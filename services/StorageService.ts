import AsyncStorage from '@react-native-async-storage/async-storage'

const KEY_NAMESPACE = 'MOVIE_FINDER_MVPMATCH'

const setItem = async (key: string, value: any): Promise<boolean> => {
    try {
        const str: string = JSON.stringify(value)
        await AsyncStorage.setItem(key + KEY_NAMESPACE, str)
        return true
    } catch (e) {
        console.log('Storage: set error', e)
        return false
    }
}

const getItem = async (key: string): Promise<any> => {
    try {
        const val: string | null = await AsyncStorage.getItem(key + KEY_NAMESPACE)
        if (val !== null) {
            return JSON.parse(val)
        }
        return null
    } catch (e) {
        console.log('Storage: get error', e)
        return false
    }//catch
}

export {setItem, getItem}