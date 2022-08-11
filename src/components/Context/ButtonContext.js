import React, {useState, createContext} from "react";

const ButtonContext = createContext();

function ButtonProvider({children}) {
    const [color, setColor] = useState('#fff');
    setColor('yellow');

    return (
        <ButtonContext.Provider value={color}>
            {children}
        </ButtonContext.Provider>
    )
}

export {ButtonContext, ButtonProvider};