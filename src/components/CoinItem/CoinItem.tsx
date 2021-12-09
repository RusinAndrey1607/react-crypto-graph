import React from "react";
import { Link } from "react-router-dom";


export type CoinItemType = {
    name: string
    logo: string
    id: string
    price: number
    priceChange: number
}

export const CoinItem: React.FC<CoinItemType> = React.memo(({ name, logo, price, priceChange, id }) => {
    return (
        <li className="coins__item">
            <Link className="coins__item-wrapper" to={`/dashboard?coin=${name}&id=${id}`} >
                <div className="coins__item-crypto">
                    <img
                        className="coins__item-icon"
                        src={logo}
                        alt={name}
                    />
                    <h5 className="coins__item-title">{name}</h5>
                </div>
                <div className="coins__item-info">
                    <div className="coins__item-price">${price}</div>
                    <div
                        className={`coins__item-profitability coins__item-profitability--${priceChange > 0 ? "good" : "bad"}`}
                    >
                        {priceChange > 0 ? "+" : null}{priceChange.toFixed(2)}%
                    </div>
                </div>
            </Link>
        </li>
    )
})