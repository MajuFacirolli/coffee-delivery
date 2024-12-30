import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { ICategoryItemProps } from '../components/CategoryItem'

export const introCategoryList: ICategoryItemProps[] = [
    {icon: ShoppingCart, description: "Compra simples e segura"},
    {icon: Package, description: "Embalagem mantém o café intacto", accentColor: "grey-dark"},
    {icon: Timer, description: "Entrega rápida e rastreada", accentColor: "yellow"},
    {icon: Coffee, description: "O café chega fresquinho até você", accentColor: "purple"}
]