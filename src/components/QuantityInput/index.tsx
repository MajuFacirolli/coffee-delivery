import { Minus, Plus } from "phosphor-react";
import { QuantityInputContainer } from "./styles";
import { useState } from "react";

export function QuantityInput() {
    const [quantity, setQuantity] = useState(1)

    function incrementQuantity() {
        setQuantity((state) => state + 1)
    }

    function decrementQuantity() {
        if(quantity > 1) {
            setQuantity((state) => state - 1)
        }
    }
    
    return (
        <QuantityInputContainer>
            <button>
                <Minus onClick={decrementQuantity}/>
            </button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>
                <Plus />
            </button>
        </QuantityInputContainer>
    )
}