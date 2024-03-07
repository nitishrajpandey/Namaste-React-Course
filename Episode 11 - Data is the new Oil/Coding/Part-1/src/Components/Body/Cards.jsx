import React from "react";
import ShemmerForHome from "../Shemmer/ShemmerForHome";
import NotFOund from "../NotFoundpage/NotFOund";
import { Link } from "react-router-dom";
import Card, { withSaleLable } from "./Card";
function Cards({ fetchData }) {
  console.log(fetchData);
  if (fetchData === null) {
    return <ShemmerForHome />;
  }
  if (fetchData.length === 0) {
    return <NotFOund />;
  }

  // higher order compoiment import and pass props
  const CardWithSale = withSaleLable(Card);

  return (
    <div className=" mt-20 ">
      <div className="columns-3 md:columns-4 ">
        {fetchData.map((item) => (
          <Link to={"/products/" + item.id} key={item.id}>
            {/* agar price 20 se kaam hoga to higher order compomenet ki help se inhence keya hua compomment so ho jayega  */}
            {item.price < 20 ? (
              <CardWithSale item={item} />
            ) : (
              <Card item={item} />
            )}
            {/* using this */}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Cards;
