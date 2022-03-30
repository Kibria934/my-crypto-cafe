import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ coin }) => {
  console.log(coin);
  const { name, image, symbol, id } = coin;
  return (
    <div className="shadow-lg mb-4 rounded-2xl w-[250px] bg-white p-4">
      <Link to={`/coin-details/${id}`}>
        <div className="flex gap-4 w-auto justify-between items-center">
          <div className="flex-shrink-0">
            <img className="mx-auto object-cover h-16 w-16 " src={image} />
          </div>
          <div
            className="flex flex-col justify-end
          "
          ></div>
          <span className="text-gray-600 font-medium">{name}</span>
          <span className="text-gray-400 text-xs">{symbol}</span>
        </div>
      </Link>
    </div>
  );
};

export default CoinCard;
