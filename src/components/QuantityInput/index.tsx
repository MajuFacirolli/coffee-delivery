import { Minus, Plus } from "phosphor-react";
import { QuantityInputContainer } from "./styles";

interface QuantityInputProps {
    quantity: number,
    incrementQuantity: () => void
    decrementQuantity: () => void
}

export function QuantityInput({ quantity, incrementQuantity, decrementQuantity }:QuantityInputProps) {
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