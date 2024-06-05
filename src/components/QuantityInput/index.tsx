import { Minus, Plus } from "phosphor-react";
import { QuantityInputContainer } from "./styles";

export function QuantityInput() {
    return (
        <QuantityInputContainer>
            <button>
                <Minus />
            </button>
            <span>1</span>
            <button>
                <Plus />
            </button>
        </QuantityInputContainer>
    )
}