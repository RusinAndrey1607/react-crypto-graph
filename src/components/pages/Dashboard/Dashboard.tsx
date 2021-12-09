import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import { Header } from "../../Header/Header";
import { Chat } from "./Chat";
import ReactApexChart from "react-apexcharts";
import { getCoinData } from "../../../api/api";
import { Preloader } from "../../Preloader/Preloader";

const Dashboard = React.memo(() => {
  const [data, setData] = useState<any>([])
  const [series, setSeries] = useState<any>([
    {
      name: '',
      data: [0, 1, 2, 3, 4, 5]
    }
  ])
  const queryParams = new URLSearchParams(useLocation().search)
  const id = queryParams.get('id')

  useEffect(() => {
    // @ts-ignore
    id && getCoinData(id).then(res => {
      setData(res)
      // @ts-ignore
      setSeries([{ name: res.name, data: res.market_data.sparkline_7d.price.slice(-25).map(item => +item.toFixed(8)) }])
    })

  }, [id, series.data])
  const options = {
    chart: {
      height: 350,
      type: 'area',
      toolbar:false,
    },
    dataLabels: {
      enabled: false
    },

    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  }
  return data.market_data ? (
    <div className="">
      <Header />
      <section className="dashboard">
        <div className="container">
          <div className="dashboard__inner">
            <h5 className="dashboard__title">DashBoard</h5>
            <p className="dashboard__paragraph">
              Track the change of the coin you need in real time
            </p>
            <HashLink to="/#coins" smooth className="dashboard__back">
              <svg
                className="dashboard__back-icon"
                width="26"
                height="26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.2 11.7H10.9385L13.9192 8.71924C14.4269 8.21156 14.4269 7.38844 13.9192 6.88076C13.4116 6.37308 12.5884 6.37308 12.0808 6.88076L6.88076 12.0808C6.37308 12.5884 6.37308 13.4116 6.88076 13.9192L12.0808 19.1192C12.5884 19.6269 13.4116 19.6269 13.9192 19.1192C14.4269 18.6116 14.4269 17.7884 13.9192 17.2808L10.9385 14.3H18.2C18.918 14.3 19.5 13.718 19.5 13C19.5 12.282 18.918 11.7 18.2 11.7Z"
                  fill=""
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0ZM2.6 13C2.6 7.25624 7.25624 2.6 13 2.6C18.7438 2.6 23.4 7.25624 23.4 13C23.4 18.7438 18.7438 23.4 13 23.4C7.25624 23.4 2.6 18.7438 2.6 13Z"
                  fill=""
                />
              </svg>
              <span className="dashboard__back-text">Back To List</span>
            </HashLink>
            <div className="dashboard__coin">
              <div className="dashboard__coin-about">
                <h5 className="dashboard__coin-name">
                  <img style={{ marginRight: "15px", maxWidth: "50px" }} src={data.image.small} alt={data.name} /> {data.name}
                </h5>
                <div className="dashboard__coin-info">
                  <div className="dashboard__coin-price">${data.market_data.current_price.usd}</div>
                  <div
                    className={`
                    dashboard__coin-profitability
                    dashboard__coin-profitability--${data.market_data.market_cap_change_percentage_24h > 0 ? "good" : "bad"}
                  `}
                  >
                    {data.market_data.market_cap_change_percentage_24h > 0 ? "+" : null}{data.market_data.market_cap_change_percentage_24h}%
                  </div>
                </div>
              </div>
              <div className="dashboard__coin-graph">
                <div id="chart">
                  {/* @ts-ignore */}
                  <ReactApexChart style={{zIndex: 2}} width={"100%"} options={options} series={series} type="area" height={350} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Chat />
    </div>
  ) : <Preloader />

})

export default Dashboard