import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { CoffeeList, CoffeeListContainer, Heading, Hero, HeroContent, Info } from "./styles"
import { useTheme } from "styled-components"
import { coffees } from "../../data.json"
import { Card } from "../../components/Card"

export function Home() {
    const theme = useTheme()
  
    return (
        <>
            <Hero>
                <HeroContent>
                    <Heading>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </Heading>
                    <Info>
                        <div>
                            <ShoppingCart 
                                size={32} 
                                weight="fill" 
                                color={theme.background} 
                                style={{background: theme["yellow-dark"]}}
                            />
                            <span>Compra simples e segura</span>
                        </div>
                        <div>
                            <Package 
                                size={32} 
                                weight="fill"
                                color={theme.background} 
                                style={{background: theme["base-text"]}}
                            />
                            <span>Embalagem mantém o café intacto</span>
                        </div>
                        <div>
                            <Timer 
                                size={32} 
                                weight="fill"
                                color={theme.background} 
                                style={{background: theme.yellow}}
                            />
                            <span>Entrega rápida e rastreada</span>
                        </div>
                        <div>
                            <Coffee 
                                size={32} 
                                weight="fill" 
                                color={theme.background} 
                                style={{background: theme.purple}}
                            />
                            <span>O café chega fresquinho até você</span>
                        </div>
                    </Info>
                </HeroContent>
                <img src="/images/hero.svg" alt="" />
            </Hero>

            <CoffeeListContainer>
               <h1 className="containerTitle">Nossos Cafés</h1>
               <CoffeeList>
                    {coffees.map(coffee => (
                        <Card key={coffee.id} coffee={coffee}/>
                    ))}
               </CoffeeList>
            </CoffeeListContainer>
        </>
    )
}