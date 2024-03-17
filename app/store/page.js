"use client";
import StoreItem from "@/components/StoreItem";
import { toast } from "@/components/ui/use-toast";
import React, { useState } from "react";

function Page() {
  const [storeProducts, setStoreProducts] = useState(
    JSON.parse(localStorage.getItem("products"))
      ? JSON.parse(localStorage.getItem("products"))
      : []
  );

  const deleteStorageProduct = (id) => {
    const deletedProducts = storeProducts.filter(
      (storeProduct) => storeProduct.id !== id
    );

    localStorage.setItem("products", JSON.stringify(deletedProducts));
    setStoreProducts(JSON.parse(localStorage.getItem("products")));
    toast({
      title: "The product has been removed from the cart",
    });
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {storeProducts.map((item) => (
        <StoreItem
          key={item.id}
          {...item}
          deleteStorageProduct={deleteStorageProduct}
        />
      ))}
    </div>
  );
}

export default Page;
