import { logDOM } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const CoinDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`).then((res) =>
      res.json().then((data) => {
        setCoin(data);
        setLoading(false);
      })
    );
  }, [id]);

  //   console.log(coin.country_origin);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="px-4 bg-gray-50 mt-5 h-[80vh] pt-20 pb-24 mx-auto max-w-7xl md:px-2">
          <div className="h-full px-3 grid grid-cols-1 md:grid-cols-2 items-center gap-4 ">
            <div className="order-2 md:order-1">
              <h1 className="text-3xl">Genaral info:</h1>
              <hr />
              <h1>Coin name: {coin.name}</h1>
              <h1>Market Cap Rank: {coin.market_cap_rank}</h1>
              <h1>
                Origin:{" "}
                {coin.country_origin ? coin.country_origin : "Not Found"}
              </h1>
              <h1 className="text-3xl mt-4">Score:</h1>
              <h1>Comunity score: {coin.community_score}</h1>
              <h1>Developer score: {coin.developer_score}</h1>
            </div>
            <div className="flex order-1 md:oreder-2 justify-center items-center">
              <img src={coin.image?.large} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoinDetails;
