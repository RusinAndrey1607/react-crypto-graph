import React from "react";

import { Slider } from "./Swiper"

export const About = React.memo(() => {
    return (
        <div className="about" id="about">
            <div className="container">
                <div className="about__inner">
                    <div className="about__info">
                        <div className="about__title">ABOUT US</div>
                        <p className="about__paragraph">
                            Blockchain and Cryptocurrencies are of great importance now.
                            So, this website has the ability to monitor the change in the
                            exchange rate of the coin you need.
                        </p>
                    </div>
                    <Slider />
                </div>
            </div>
        </div>
    )
})