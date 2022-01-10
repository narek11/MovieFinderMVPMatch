import AsyncStorage from '@react-native-async-storage/async-storage'

const setItem = async (key: string, value: any): Promise<boolean> => {
    try {
        const str: string = JSON.stringify(value)
        await AsyncStorage.setItem(key, str)
        return true
    } catch (e) {
        console.log("Storage: set error", e)
        return false
    }
}

const getItem = async (key: string): Promise<any> => {
    try {
        const val: string | null = await AsyncStorage.getItem(key)
        if (val !== null) {
            return JSON.parse(val)
        }
        return null
    } catch (e) {
        console.log("Storage: get error", e)
        return false
    }//catch
}

export {setItem, getItem}