import React from "react";

const Card = () => {
  return (
    <div className="relative shadow-md max-w-sm cursor-pointer">
      <div className="relative h-95 overflow-hidden aspect-ratio-1 hover:scale-105 transition-transform duration-300">
        <img
          src="/painting.jpg"
          layout="fill"
          objectFit="cover"
          alt="product"
        />
      </div>
      <div className="p-4 space-y-2">
        <h1 className=" text-3xl font-semibold">Iphone 15 prop max</h1>
        <p className="text-xl text-gray-500 truncate">
          Iphone 15 prop max for sale
        </p>
        <br />
        <br />
      </div>

      <div className="absolute bottom-0 right-0 p-2 shadow-md bg-red-500">
        <span className="text-lg font-semibold">$99.99</span>
      </div>
    </div>
  );
};

export default Card;
