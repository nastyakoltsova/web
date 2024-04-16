import {JSX} from "react";
import {Products} from "../Catalog/Catalog.tsx";

export function CartProductCard({ product, quantity }: { product: Products, quantity: number }): JSX.Element {
    return(
        <>
            <div className="card">
                <img src={product.image} alt={'Фотография товара'}/>
                <div className="card-content">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <div className="buy">
                        <strong className="price">{product.price}$</strong>

                            <div className="button-wrapper">
                                {/*<button className="minus-button" onClick={handleDecrement}>-</button>*/}
                                <span className="button-value">{quantity}</span>
                                {/*<button className="plus-button" onClick={handleIncrement}>+</button>*/}
                            </div>

                    </div>
                </div>
            </div>
        </>
    )
}
