import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.header`
    padding: 2rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Aside = styled.aside`
    display: flex;
    gap: 0.75rem;

    div {
        display: flex;
        align-items: center;
        gap: 0.25rem;

        ${mixins.fonts.textS};

        padding: 0.5rem;
        border-radius: 6px;
        background: ${props => props.theme["purple-light"]};
        color: ${props => props.theme.purple};

        p {
            color: ${props => props.theme["purple-dark"]};
        }

    }

    span {
        border-radius: 6px;
        padding: 0.5rem;
        background: ${props => props.theme["yellow-light"]};
        color: ${props => props.theme["yellow-dark"]};
      
        display: flex;
        align-items: center;
    }
`