import {JSX} from "react";

export function Info(): JSX.Element {
    return (
        <>
            <div className="info">
                <h1>Кто?</h1>
                <h3>
                    "Hearth & Haven" — магазин для ... <a href="https://youtu.be/9bZkp7q19f0?si=OoBvn2yMzwi9lLLe&t=4">[продолжение в источнике]</a>
                </h3>
                <h1>Что?</h1>
                <table>
                    <tr>
                        <td><h3>Название</h3></td>
                        <td><h3>Описание</h3></td>
                        <td><h3>Цена</h3></td>
                    </tr>
                    <tr>
                        <td>Ароматическая свеча</td>
                        <td>С запахом буддизма</td>
                        <td>125$</td>
                    </tr>
                    <tr>
                        <td>Свеча</td>
                        <td>Свеча с вайбом</td>
                        <td>50$</td>
                    </tr>
                    <tr>
                        <td>Свеча</td>
                        <td>Свеча без вайба</td>
                        <td>1$</td>
                    </tr>
                    <tr>
                        <td>Плед</td>
                        <td>Белый поэтому быстро испачкается</td>
                        <td>8$</td>
                    </tr>
                    <tr>
                        <td>Прикольный плед</td>
                        <td>Типа вы шаурма</td>
                        <td>250$</td>
                    </tr>
                </table>
                {/*<div className="swiper">*/}
                {/*    <div className="swiper-wrapper">*/}
                {/*        <div className="swiper-slide"> <img src="img/1.jpeg"/></div>*/}
                {/*        <div className="swiper-slide"> <img src="img/2.png"/></div>*/}
                {/*        <div className="swiper-slide"> <img src="img/3.jpeg"/></div>*/}
                {/*        <div className="swiper-slide"> <img src="img/4.jpg"/></div>*/}
                {/*        <div className="swiper-slide"> <img src="img/5.jpg"/></div>*/}
                {/*        ...*/}
                {/*    </div>*/}
                {/*    <div className="swiper-pagination"></div>*/}

                {/*    <div className="swiper-button-prev"></div>*/}
                {/*    <div className="swiper-button-next"></div>*/}
                {/*</div>*/}
            </div>
        </>
    )
}
