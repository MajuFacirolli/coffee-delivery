import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const QuantityInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    background: ${props => props.theme["base-button"]};
    padding: 0.5rem;
    border-radius: 6px;

    ${mixins.fonts.textM}
    color: ${props => props.theme["base-title"]};

    button {
        background: none;
        border: none;

        display: flex;
        justify-content: center;
        align-items: center;
        
        color: ${props => props.theme.purple};
        cursor: pointer;
    }
`