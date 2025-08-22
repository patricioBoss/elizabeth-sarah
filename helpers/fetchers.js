import axios from "axios";
import { yahooRequest } from "../utils/request";

export const getUserById = (url) => axios.get(url).then((res) => res.data.data);

export const getQuotes = async (quoteString) => {
  const { request } = yahooRequest();
  // const url = `/finance/quote?symbols=${quoteString}`;
  const url = `/yahooapi/quotes?symbols=${quoteString}`;
  const stocksResponse = await request.get(url);
  // return await stocksResponse.data.quoteResponse.result;
  return await stocksResponse.data.data;
};

export const getCoinPrices = async () => {
  try {
    const { data } = await axios.get(
      "https://rest.coinapi.io/v1/assets?filter_asset_id=BTC,USDT,ETH,XRP,DOGE",
      {
        headers: {
          "X-CoinAPI-Key": "2b05c53a-a524-4860-9313-54254ed539fd",
        },
      }
    );
    return data.reduce((acc, coindata) => {
      acc[coindata.asset_id] = coindata;
      return acc;
    }, {});
  } catch (error) {
    console.log("Error fetching coin prices:", error);
  }
};
