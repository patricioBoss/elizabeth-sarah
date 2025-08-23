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

export const getCoinPricesApi = async () => {
  try {
    const { data } = await axios.get("/api/fetch-coin-prices");
    return data.data;
  } catch (error) {
    console.log("Error fetching coin prices:", error);
  }
};
