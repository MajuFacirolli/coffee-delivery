import { coffees } from '../../../data.json'
import { CatalogCard } from '../cards/CatalogCard'

export const Catalog = () => {
    return (
        <section className="container pt-8 pb-28 space-y-12">
            <h2 className="title-l text-base-subtitle">Nossos Cafés</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {coffees.map((coffee) => (
                    <CatalogCard key={coffee.id} coffee={coffee} />
                ))}
            </div>
        </section>
    )
}