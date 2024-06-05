import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CardsContainer = styled.div`
    width: 16rem;
    height: 20rem;
    padding: 1.5rem;
    background: ${props => props.theme["base-card"]};
    border-radius: 6px 36px;

    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;

    h1 {
        ${mixins.fonts.titleS}
        color: ${props => props.theme["base-subtitle"]};
    }

    p {
        ${mixins.fonts.textS}
        color: ${props => props.theme["base-label"]};
    }
`

export const CoffeImg = styled.img`
    margin-top: -4rem;
    max-width: 120px;
    max-height: 120px;
    align-self: center;
`
export const Tags = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    span {
        color: ${props => props.theme["yellow-dark"]};
        background-color: ${props => props.theme["yellow-light"]};
        padding: 0.3rem;
        border-radius: 50px;
        text-transform: uppercase;
        ${mixins.fonts.tag}
        text-align: center;
    }
`

export const Control = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    .price {
        ${mixins.fonts.textS}
        color: ${props => props.theme["base-text"]};

        span {
            ${mixins.fonts.titleM}
        }
    }

    svg {
        
    }
`