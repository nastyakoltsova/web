import {JSX} from "react";
import {Link} from "react-router-dom";

export function Navbar(): JSX.Element {
    return (
        <nav className="navbar">
            <Link to={'/info'}>О нас</Link>
            <Link to={'/catalog'}>Каталог</Link>
            <Link to={'/wishlist'}>Список желаний</Link>
            <Link to={'/cart'}>Корзина</Link>
        </nav>
    )
}
