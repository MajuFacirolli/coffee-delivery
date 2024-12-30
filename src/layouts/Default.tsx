import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"

export const DefaultLayout = () => {
    return (
        <div className="container">
            <Header />
            <Outlet />
        </div>
    )
}