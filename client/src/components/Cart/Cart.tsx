import {JSX} from "react";
import {selectCartItems} from "../../store/store.ts";
import {useSelector} from "react-redux";
import {CartProductCard} from "./CartProductCard.tsx";
import {Products} from "../Catalog/Catalog.tsx";

interface ProductInCart {
    product: Products,
    quantity: number
}

export function Cart(): JSX.Element {
    const cartItems = useSelector(selectCartItems);
    console.log(cartItems)
    return (
        <>
            <div className={"catalog"}>
                {cartItems.length !== 0 ? cartItems.map((item: ProductInCart) =>
                    <div>
                        <CartProductCard product={item.product} quantity={item.quantity}/>
                    </div>) : <div>В корзине пока ничего нет</div>}
            </div>
        </>
    )
}
