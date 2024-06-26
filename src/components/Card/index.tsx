import { ShoppingCart } from "phosphor-react"
import { CardsContainer, CoffeImg, Control, Tags } from "./styles"
import { QuantityInput } from "../QuantityInput"
import { useTheme } from "styled-components"
import { useState } from "react"

interface CardProps {
    coffee: {
        id: string
        title: string
        description: string
        tags: string[]
        price: number
        image: string
    }
}

export function Card({ coffee }: CardProps) {
    const theme = useTheme()
    const [quantity, setQuantity] = useState(1)

    function incrementQuantity() {
        setQuantity((state) => state + 1)
    }

    function decrementQuantity() {
        if(quantity > 1) {
            setQuantity((state) => state - 1)
        }
    }

    function handleAddItem() {
        console.log(quantity);
        
    }

    return (
        <CardsContainer>
            <CoffeImg src={coffee.image} alt="" />
            <Tags>
                {coffee.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                ))}
            </Tags>
            <h1>{coffee.title}</h1>
            <p>{coffee.description}</p>
            <Control>
                <p className="price">R$ <span>{coffee.price.toFixed(2)}</span></p>
                <QuantityInput 
                    quantity={quantity}
                    incrementQuantity={incrementQuantity} 
                    decrementQuantity={decrementQuantity}
                />
                <ShoppingCart 
                    onClick={handleAddItem}
                    size={32} 
                    weight="fill"
                    color={theme["base-card"]}
                    style={{background: theme["purple-dark"], padding: 6, borderRadius: 6}}
                />
            </Control>
        </CardsContainer>
    )
}