import {JSX} from "react";
import {selectCartItems} from "../../store/store.ts";
import {useSelector} from "react-redux";
import {CartProductCard} from "./CartProductCard.tsx";

export function Cart(): JSX.Element {
    const cartItems = useSelector(selectCartItems);
    console.log(cartItems)
    return (
        <>
            <div className={"catalog"}>
                {cartItems.length !== 0 ? cartItems.map((item) =>
                    <div>
                        <CartProductCard product={item.product} quantity={item.quantity}/>
                    </div>) : <div>В корзине пока ничего нет</div>}
            </div>
        </>
    )
}
