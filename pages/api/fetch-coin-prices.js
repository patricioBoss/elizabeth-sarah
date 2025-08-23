import nc from "next-connect";
import {
  getAllCoinPrices,
  updateCoinPrices,
} from "../../controllers/investment.controller";

const handler = nc({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(500).end("internal server error");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("route is not found");
  },
  attachParams: true,
}).get(getAllCoinPrices);

export default handler;
