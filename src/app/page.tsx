"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./components/ProductCard";

interface product {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
}
interface data {
  products: product[];
  skip: number;
  limit: number;
  total: number;
}
export default function Home() {
  const [skip, setSkip] = useState(0);
  const [btnType, setBtnType] = useState("initial");

  const { isFetching, error, data, refetch } = useQuery<data>({
    queryKey: ["skip", skip],
    queryFn: async () => {
      const res = await fetch(
        `https://dummyjson.com/products?limit=5&skip=${skip}&select=title,price,thumbnail`
      );

      return res.json();
    },
    enabled: skip > 0,
  });

  const numberOfCards = 5;
  const pageNum = skip / numberOfCards + 1;
  const MaxNumOfPages = data ? Math.ceil(data.total / numberOfCards) : 0;
  async function handleClick(skipValue: number) {
    setSkip(skipValue);
    refetch();
  }

  //change button background while loading
  const initialLoadButtonClass = `border p-2 block mx-auto mt-4 ${
    isFetching && btnType === "initial" ? "bg-amber-200" : ""
  }`;

  const backwardButtonClass = `border p-2 ${
    pageNum === 1 ? "bg-gray-200" : ""
  }`;

  const ForwardButtonClass = `border p-2 ${
    pageNum === MaxNumOfPages ? "bg-gray-200" : ""
  }`;

  return (
    <>
      <button
        className={initialLoadButtonClass}
        onClick={() => {
          handleClick(0);
          setBtnType("initial");
        }}
        disabled={isFetching}
      >
        {isFetching && btnType === "initial" ? "Loading...." : "Get Products"}
      </button>
      {error && (
        <p className="bg-red-400 text-amber-50 p-2 w-[12rem] mx-auto text-center my-2">
          {error.message}
        </p>
      )}
      {data && (
        <>
          {/* product cards */}
          <div className="grid [grid-template-columns:repeat(auto-fit,minmax(15.5rem,17rem))] justify-center items-stretch gap-2 p-4 max-w-[109rem] mx-auto">
            {data.products.map((n: product) => (
              <ProductCard
                key={n.id}
                price={n.price}
                title={n.title}
                image={n.thumbnail}
              />
            ))}
          </div>
          {/* pagination */}
          <div className="flex justify-center items-center gap-20">
            <button
              className={backwardButtonClass}
              onClick={() => {
                setSkip(skip - numberOfCards);
                setBtnType("previous");
              }}
              aria-label="previous page"
              disabled={isFetching || skip === 0}
            >
              {"<"}
            </button>

            <p className="text-lg">{pageNum}</p>

            <button
              className={ForwardButtonClass}
              onClick={() => {
                setSkip(skip + numberOfCards);
                setBtnType("next");
              }}
              aria-label="next page"
              disabled={isFetching || pageNum === MaxNumOfPages}
            >
              {">"}
            </button>
          </div>
        </>
      )}
    </>
  );
}
