import {useContext, useState, useEffect} from 'react';
import Context from './Context';

export const useStore = () => {
    const [state, dispatch] = useContext(Context);
    return [state, dispatch];
}

const getStorageData = (key, initialValue) => {
    if(typeof window !== 'undefined') {
        const saveData = localStorage.getItem(key);
        const initial = saveData !== null ? JSON.parse(saveData) : initialValue;
        return initial
    }
}

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        return getStorageData(key, initialValue)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}
