import { MapPin, ShoppingCart } from "phosphor-react";
import { Aside, HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <NavLink to="/">
                <img src="/logo.svg" alt="Coffee Delivery" />
            </NavLink>
            <Aside>
                <div>
                    <MapPin size={22} weight="fill"/>
                    <p>Porto Alegre, RS</p>
                </div>
                <NavLink to="/cart">
                    <span>
                        <ShoppingCart size={22} weight="fill"/>
                    </span>
                </NavLink>
            </Aside>
        </HeaderContainer>
    )
}