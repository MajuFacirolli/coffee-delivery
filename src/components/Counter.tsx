import { Minus, Plus } from 'phosphor-react'

interface  ICounterProps {
    quantity: number
    incrementQuantity?: () => void
    decrementQuantity?: () => void
}

export function Counter({
    quantity,
    incrementQuantity,
    decrementQuantity,
}: ICounterProps) {
    return (
        <div className='flex item-center gap-1 bg-base-button p-2 rounded-md'>
            <button onClick={decrementQuantity}>
                <Minus size={14} weight='bold' className='text-purple hover:text-purple-dark'/>
            </button>
            <span className='text-m text-base-title'>{quantity}</span>
            <button onClick={incrementQuantity}>
                <Plus size={14} weight='bold' className='text-purple hover:text-purple-dark'/>
            </button>
        </div>
    )
}