import React, { useEffect, useState } from "react";
import { useCryptoData } from "../../../hooks/useCryptoData";
import { useDebounce } from "../../../hooks/useDebounce";
import { CoinItem } from "../../CoinItem/CoinItem";
import { Header } from "../../Header/Header";
import {Preloader} from "./../../Preloader/Preloader"


const SearchCrypto: React.FC = React.memo(() => {
  const [query, setQuery] = useState('')
  const [price, setPrice] = useState('')
  const [coins, setCoins] = useState([])
  const data = useCryptoData(100)
  const [filteredCoins, setFilteredCoins] = useState([])

  useEffect(useDebounce(() => {
    // @ts-ignore
    setFilteredCoins(coins?.filter((coin) => coin.name.toLowerCase().includes(query.toLowerCase()) && coin.market_data.current_price.usd > price))
  }, 500), [query, price, coins])

  useEffect(() => {
    // @ts-ignore
    setCoins(data)
  }, [data])

  return  query === "" && price === '' && filteredCoins &&  filteredCoins.length === 0  ?  <Preloader /> :(
    <div className="">
      <Header />
      <section className="coins coins-big">
        <div className="container">
          <div className="coins__inner" id="up">
            <div className="coins__box-list">
              <Aside price={price} query={query} queryCallback={setQuery} priceCallback={setPrice} />

              <ul className="coins__list">
                {/* @ts-ignore */}
                {filteredCoins && filteredCoins.map((item) => <CoinItem id={item.id} price={item.market_data.current_price.usd} priceChange={item.market_data.market_cap_change_percentage_24h} key={item.id} name={item.name} logo={item.image.small} />)}
                {/* @ts-ignore */}
                {filteredCoins && filteredCoins.length === 0 && <span style={{ fontSize: 24, fontWeight: 500 }}>
                  Cryptocurrencies not found</span>}
              </ul>
            </div>
            <a className="coins__arrow" href="#up" id="toTop">
              <svg
                width="80"
                height="80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="80" height="80" rx="40" fill="#0D0D2B" />
                <path
                  d="M70 50L40 20L10 50"
                  stroke="#3671E9"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
})

const Aside: React.FC<AsideFilterType> = React.memo(({ price, query, priceCallback, queryCallback }) => {
  return (
    <aside className="coins__aside filter">
      <div className="filter__block">
        <h5 className="filter__title filter__title-main">filter</h5>
        <div className="filter__search">
          <h2 style={{ marginBottom: 20, textAlign: 'center' }}>Search by name</h2>
          <input
            value={query}
            onChange={(e) => queryCallback(e.currentTarget.value)}
            className="filter__search-input"
            type="search"
            placeholder="Type name coin"
          />
        </div>
        <div className="filter__price">
          <h2 style={{ marginBottom: 20, textAlign: 'center' }}>Search by price</h2>
          <input
            value={price}
            onChange={(e) => priceCallback(e.currentTarget.value)}
            className="filter__search-input"
            type="text"
            placeholder="Type min price"
          />
        </div>
      </div>
    </aside>
  )
})

type AsideFilterType = {
  price: string
  priceCallback: (value: string) => void
  queryCallback: (query: string) => void
  query: string
}


export default SearchCrypto