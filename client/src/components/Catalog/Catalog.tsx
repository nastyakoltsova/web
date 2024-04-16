import {JSX, useState} from "react";
import {ProductCard} from "./ProductCard.tsx";
import products from "../../assets/products.json"
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/store.ts";

export interface Products {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number
}


export function Catalog(): JSX.Element {
    const [count, setCount] = useState<number>(0)
    const [selectedProduct, setSelectedProduct] = useState<Products | null>(null)

    const dispatch = useDispatch();

    // const handleIncrement = () => {
    //     setCount(count + 1)
    // }

    const handleAddToCart = (product: Products) => {
        dispatch(addToCart(product));
        setCount(count + 1)
    };

    const handleDecrement = () => {
        setCount(count - 1)
    }

    const showModal = (product: Products) => {
        setSelectedProduct(product)
    }

    const hideModal = () => {
        setSelectedProduct(null);
    }

    return (
        <>
            <div className={"catalog"}>
                {products && products.map((product: Products) =>
                    <div key={product.id} onClick={() => showModal(product)}>
                        <ProductCard product={product}/>
                    </div>
                )}
            </div>
            {selectedProduct && (
                <div id="myModal" className="modal">
                    <div className="modalContent">
                        <div className="close" onClick={hideModal}>&times;</div>
                        <div className="modalProduct">
                            <div>
                                <img id="modalImage" src={selectedProduct.image} alt={'Фотография товара'}/>
                            </div>
                            <div className="modalText">
                                <h2 id="modalName">{selectedProduct.name}</h2>
                                <h3 id="modalDescription">{selectedProduct.description}</h3>
                                <div className="buy">
                                    <strong className="price">{selectedProduct.price}$</strong>
                                    {count === 0 ? <button onClick={() => handleAddToCart(selectedProduct)}>В корзину</button> :
                                        <div className="button-wrapper">
                                            <button className="minus-button" onClick={handleDecrement}>-</button>
                                            <span className="button-value">{count}</span>
                                            <button className="plus-button" onClick={() => handleAddToCart(selectedProduct)}>+</button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <h1>Отзывы:</h1>
                        <div id="preloader" className="loader"></div>
                        <div id="content">
                            <div id="reviews"></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
