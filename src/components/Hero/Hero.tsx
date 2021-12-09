import React from "react";
import { Link } from "react-router-dom";
import img from './../../assets/images/icon/bitcoin-mane.svg'

export const Hero = React.memo(() => {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__info">
            <h1 className="hero__title">
              Make investment decisions based on detailed course charts
            </h1>
            <p className="hero__paragraph">
              Read the information about cryptocurrency and then make your investment decision based on simple charts.You can also see people's reviews about cryptocurrency in the chat
            </p>
            <Link to="/crypto" className="hero__btn btn">Learn More</Link>
          </div>
          <div
            className="hero__bitcoin"

          >
            <img
              className="hero__bitcoin-icon"
              src={img}
              alt="Bitcoin"
            />
          </div>
        </div>
      </div>
    </section>
  )
})