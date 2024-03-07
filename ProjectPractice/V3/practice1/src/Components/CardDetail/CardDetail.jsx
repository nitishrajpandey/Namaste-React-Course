import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetchApi from "../../Utils/useFetchApi";
import CardDetailShemmer from "../Shemmer/CardDetailShemmer";

function CardDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products/" + id);
    const json = await data.json();

    setProduct(json);
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  console.log(product);
  if (product === null) {
    return <CardDetailShemmer />;
  }

  return (
    <div className=" flex justify-center">
      <div className="w-[80%] mt-20 ">
        <div>
          <Link to={"/"}>
            <button className="px-6 py-2 bg-orange-600 text-white rounded-lg font-sans font-semibold text-xl">
              Back
            </button>
          </Link>
        </div>
        <div>
          <div>
            <img className="w-full rounded-xl" src={product.thumbnail} alt="" />
          </div>
          <h1 className="text-white text-center py-5 text-2xl font-bold">
            {product.title}
          </h1>
        </div>
        <div className="px-3 py-2">
          <h1 className="font-bold text-3xl pb-2 text-green-800">Details : </h1>
          <p className="pt-4 pb-10 text-xl w-[60%]">{product.description}</p>
          <div className=" flex justify-between">
            <div>
              <ul className="list-disc flex flex-col gap-3 px-5">
                <li className="text-xl">Brand : {product.brand}</li>
                <li className="text-xl">Price : ${product.price}</li>
                <li className="text-xl">Category : {product.category}</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc flex flex-col gap-3">
                <li className="text-xl">Rating : {product.rating}</li>
                <li className="text-xl">
                  Discount Percentage : {product.discountPercentage} %
                </li>
                <li className="text-xl">Stock : {product.stock}</li>
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="font-semibold text-3xl pb-6 text-red-500">
              Screen Shoot
            </h1>

            <div className="flex flex-col items-center mt-10 ">
              <div className="columns-3 md:columns-4   ">
                {product.images.map((item) => (
                  //   <Link to={"/products/" + item.id} key={item.id}>
                  <div
                    key={item}
                    className="mb-5 rounded-lg bg-white overflow-hidden"
                  >
                    <div className="flex flex-col gap-3">
                      <img className=" rounded-t-lg" src={item} />
                    </div>
                  </div>
                  //   </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
