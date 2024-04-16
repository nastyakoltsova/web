import React, {FormEvent, JSX, useState} from "react";
import {Products} from "./Catalog.tsx";
import {addToCart, selectCartItems} from "../../store/store.ts";
import {useDispatch, useSelector} from "react-redux";

export function ProductCard({product}: { product: Products }): JSX.Element {
    const [count, setCount] = useState<number>(0)
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const cartItemCount = cartItems.reduce((total: number, item: { product: { id: number; }; quantity: number; }) => {
        if (item.product.id === product.id) {
            return total + item.quantity;
        }
        return total;
    }, 0);

    const handleAddToCart = (event : FormEvent, product: Products) => {
        event.stopPropagation()
        dispatch(addToCart(product));
        setCount(count + 1)
    };

    // const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     event.stopPropagation()
    //     setCount(count + 1)
    // }

    const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        setCount(count - 1)
    }

    return(
        <>
            <div className="card">
                <img src={product.image} alt={'Фотография товара'}/>
                <div className="card-content">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <div className="buy">
                        <strong className="price">{product.price}$</strong>
                        {cartItemCount === 0 ? <button onClick={(event) => handleAddToCart(event, product)}>В корзину</button> :
                            <div className="button-wrapper">
                                <button className="minus-button" onClick={(e) => handleDecrement(e)}>-</button>
                                <span className="button-value">{cartItemCount}</span>
                                <button className="plus-button" onClick={(event) => handleAddToCart(event, product)}>+</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
