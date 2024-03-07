import React from "react";

function Card({ item }) {
  return (
    <div className="mb-5 rounded-lg bg-white overflow-hidden">
      <div className="flex flex-col gap-3">
        <img className=" rounded-t-lg" src={item.thumbnail} />
        <h1 className="text-center text-black font-bold pb-2">{item.title}</h1>
      </div>
    </div>
  );
}

// this is higher order compomment

// higher order compoment

// input => Card => CardSale

export const withSaleLable = (Card) => {
  return (props) => {
    return (
      <div>
        <label className="bg-black absolute px-10 py-2 rounded-lg">Sale</label>
        <Card {...props} />
      </div>
    );
  };
};

// the end of higher order of compoments

export default Card;
