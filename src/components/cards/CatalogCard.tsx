import { ShoppingCart } from "phosphor-react"
import { useState } from "react"
import { Counter } from "../Counter"

interface ICoffee {
    id: string
    name: string
    description: string
    tags: string[]
    price: number
    image: string
}

export const CatalogCard = ({ coffee }: { coffee: ICoffee }) => {
    const [quantity] = useState(1)

    return (
        <article className="relative bg-base-card px-5 pb-5 text-center flex flex-col items-center rounded-4xl rounded-tl-md rounded-br-md">
            <img src={coffee.image} alt={coffee.name} className="-mt-6" />
            <div className="flex items-center justify-center gap-1 mt-3">
                {coffee.tags.map((tag) => (
                    <span
                        key={tag}
                        className="tag uppercase text-yellow-dark py-1 px-2 bg-yellow-light rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex flex-col gap-2 mt-4">
                <h3 className="title-s text-base-subtitle">{coffee.name}</h3>
                <p className="text-s text-base-label">{coffee.description}</p>
            </div>
            <div className="flex items-center gap-5 mt-8">
                <p className="text-base-text text-s">
                    R$ <span className="title-m">{coffee.price.toFixed(2).replace(".", ",")}</span>
                </p>
                <div className="flex items-center gap-2">
                    <Counter quantity={quantity} />
                    <button className="btn bg-purple-dark hover:bg-purple text-white p-2 rounded-md" >
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                </div>
            </div>
        </article>
    )
}