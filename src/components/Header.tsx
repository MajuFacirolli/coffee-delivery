import { Link } from "react-router-dom"
import logo from "../assets/Logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react"

export const Header = () => {
    return (
        <header className="container flex items-center justify-between py-8">
            <Link to='/' title="Home">
                <img src={logo} alt="" />
            </Link>

            <aside className="flex items-center justify-center space-x-3">
                <div className="flex items-center justify-center space-x-1 bg-purple-light p-2 rounded-md text-purple">
                    <MapPin weight="fill" size={22}/>
                    <span className="text-purple-dark text-s">Porto Alegre, RS</span>
                </div>
                <Link to='/checkout' title="Checkout" className="bg-yellow-light p-2 rounded-md text-yellow-dark">
                    <ShoppingCart weight="fill" size={22}/>
                </Link>
            </aside>
        </header>
    )
}