import {useContext, useState} from 'react';
import Context from './Context';

export const useStore = () => {
    const {state, dispatch} = useContext(Context);
    return {state, dispatch};
}

export const useModal = () => {
    const [isShow, setIsShow] = useState(false);

    function toggle() {
        setIsShow(!isShow);
    }

    return {
        isShow,
        toggle,
    }
}