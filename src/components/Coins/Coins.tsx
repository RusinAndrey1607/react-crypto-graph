import React from "react";
import { useCryptoData } from "../../hooks/useCryptoData";
import { CoinItem } from "../CoinItem/CoinItem";
import { Preloader } from "../Preloader/Preloader";

export const Coins = React.memo(() => {
    
    const data = useCryptoData(20)

    return data && data.length !==0 ? (
        <section className="coins" id="coins">
            <div className="container">
                <div className="coins__inner">
                    <div className="coins__box">
                        <h3 className="coins__title" >Top 20 coins</h3>
                        <ul className="coins__list">
                            {/* @ts-ignore */}
                            {data && data.map((item) => <CoinItem id={item.id} price={item.market_data.current_price.usd} priceChange={item.market_data.market_cap_change_percentage_24h} key={item.id} name={item.name} logo={item.image.small} />)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    ) : <Preloader />
})


