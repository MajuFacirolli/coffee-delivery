import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Hero = styled.section`
    min-height: calc(100vh - 6.8rem);
    background-image: url(/images/hero-bg.svg);
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const HeroContent = styled.div`
    width: 36.5rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
        ${mixins.fonts.titleXL}
        color: ${props => props.theme["base-title"]};
    }

    p {
        ${mixins.fonts.textL}
    }
`

export const Info = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1.25rem;

    div {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }

    svg {
        border-radius: 50%;
        padding: 0.5rem;
    }
`

export const CoffeeListContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    padding:  5rem 10rem;
    
    .containerTitle {
        ${mixins.fonts.titleL}
        color: ${props => props.theme["base-subtitle"]};
    }
`

export const CoffeeList = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    gap: 2.5rem 2rem;
    align-items: center;
`