import coffee from '../../assets/coffee.svg'
import { introCategoryList } from '../../data/introCategoryList'
import { CategoryItem } from '../CategoryItem'

export const Intro = () => {
    return (
        <section className="container py-10 xl:py-24 flex flex-col xl:flex-row items-center justify-between">
            <div className='space-y-16'>
                <div className='max-w-xl space-y-4'>
                    <h1 className="title-xl text-base-title">
                        Encontre o café perfeito para qualquer hora do dia
                    </h1>
                    <p className="text-l text-base-subtitle">
                        Com o Coffee Delivery você recebe seu café onde estiver, 
                        a qualquer hora
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 sm:gap-x-10 gap-y-5'>
                    {introCategoryList.map((item) => (
                        <CategoryItem 
                            key={item.description}
                            icon={item.icon} 
                            description={item.description} 
                            accentColor={item.accentColor}
                        />
                    ))}
                </div>
            </div>
            <img src={coffee} alt="" className='mt-10 xl:mt-0'/>
        </section>
    )
}