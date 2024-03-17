"use client";
import FilterCategoryItems from "@/components/FilterCategoryItems";
import Loader from "@/components/Loader";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Page({ params }) {
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://api.escuelajs.co/api/v1/products`
      );
      const filterData = await data.filter(
        (item) =>
          item.category.name.toLowerCase() === params.category.toLowerCase()
      );
      setCategoryProducts(filterData);
    };
    getData();
  }, []);

  return (
    <div className="flex flex-wrap justify-between">
      {categoryProducts.length ? (
        categoryProducts.map((categoryProduct) => (
          <FilterCategoryItems key={categoryProduct.id} {...categoryProduct} />
        ))
      ) : (
        <div className="flex justify-center items-center h-[90vh] w-full">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default Page;
