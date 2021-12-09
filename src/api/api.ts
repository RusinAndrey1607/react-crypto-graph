import CoinGecko from 'coingecko-api'

const CoinGeckoClient = new CoinGecko()

export const getData = async (limit: number) => {
    try {
        let data = await CoinGeckoClient.coins.all({ sparkline: false, localization: false, per_page: limit, order: "gecko_asc", })
        return data.data
    } catch (error) {
        console.log(error)
    }

}

export const getCoinData = async (coinId: string) => {
    let data = await CoinGeckoClient.coins.fetch(coinId, { tickers: false, localization: false, sparkline: true, })
    return data.data
}


