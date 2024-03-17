"use client";
import moment from "moment";
import Link from "next/link";
import React from "react";

function ProductItem({
  id,
  title,
  description,
  price,
  images,
  creationAt,
  setLocalStorage,
}) {
  return (
    <div className="w-[400px] border-2 border-slate-500 rounded-md overflow-hidden">
      <img src={images[0]} alt={title} className="w-full h-[350px]" />
      <div className="py-2 px-1 h-full">
        <h3 className="font-bold">{title}</h3>
        <p className="my-2">{description.slice(0, 50)}...</p>
        <div className="flex justify-between">
          <p className="text-[18px] font-semibold">${price}</p>
          <p>{moment(creationAt).format("Do MMMM YYYY")}</p>
        </div>

        <Link
          href={`/products/${id}`}
          className="w-full block text-center bg-blue-700 py-2 text-white font-semibold rounded-md mt-3"
        >
          Show More
        </Link>
        <button
          onClick={() => setLocalStorage(id)}
          className="w-full bg-blue-700 py-2 text-white font-semibold rounded-md mt-3"
        >
          Add Store
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
