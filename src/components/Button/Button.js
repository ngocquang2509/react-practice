import React, {useContext} from "react";
import { ButtonContext } from "../Context/ButtonContext";
import { Button } from "./style";

function ItemButton() {
    const btnContext = useContext(ButtonContext);
    return (
        <Button btnContext/>
    )
}

export default ItemButton;