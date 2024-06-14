import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CartContainer = styled.main`
    display: flex;
    justify-content: center;
    gap: 2rem;
    align-items: flex-start;
`

export const InfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    justify-content: left;

    h2 {
        ${mixins.fonts.titleXS}
        color: ${props => props.theme["base-subtitle"]};
    }
`

export const OrderInfoContainer = styled.div`
    width: 40rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

export const AddressContainer = styled.div`
    width: 40rem;
    background-color: ${props => props.theme["base-card"]};
    padding: 2.5rem;
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const Heading = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: flex-start;

    div {
        display: flex;
        flex-direction: column;
        gap: 2px;

        span {
            ${mixins.fonts.textM}
            color: ${props => props.theme["base-subtitle"]};
        }

        p {
            ${mixins.fonts.textS}
        }
    }
`

export const AddressFormContainer = styled.div`
    width: 35rem;
    display: grid;
    grid-template-areas:
        "cep . ."
        "street street street"
        "number complement complement"
        "neighborhood city state";
    grid-template-columns: 200px 1fr 60px;
    grid-gap: 16px 12px;

    .cep {
        grid-area: cep;
    }

    .street {
        grid-area: street;
    }

    .number {
        grid-area: number;
    }

    .complement {
        grid-area: complement;
    }

    .neighborhood {
        grid-area: neighborhood;
    }

    .city {
        grid-area: city;
    }

    .state {
        grid-area: state;
    }
`

export const Input = styled.input`
    min-height: 1.125rem;
    padding: 0.75rem;
    background: ${props => props.theme["base-input"]};
    ${mixins.fonts.textS}
    border: 1px solid transparent;
    border-radius: 6px;
    outline: none;

    &:focus {
        border-color: ${props => props.theme["yellow-dark"]};
    }
`

export const PaymentContainer = styled.section`
    width: 40rem;
    background-color: ${props => props.theme["base-card"]};
    padding: 2.5rem;
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const PaymentOptions = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;
`

export const Option = styled.label`
    width: 11rem;
    display: flex;
    gap: 0.75rem;
    align-items: center;
    justify-content: flex-start;
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-button']};
    ${(mixins.fonts.buttonM)}
    text-transform: uppercase;
    padding: 1rem;
    transition: 0.5s;

    &:hover {
        background-color: ${(props) => props.theme['base-hover']};
        cursor: pointer;
    }

    input {
        display: none;
    }

    svg {
        color: ${props => props.theme.purple};
    }

    &.selected {
        background-color: ${(props) => props.theme['purple-light']};
        border: 1px solid ${(props) => props.theme.purple};
    }
`