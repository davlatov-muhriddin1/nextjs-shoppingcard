"use client";

import Loader from "@/components/Loader";
import ProductItem from "@/components/ProductItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [storageProducts, setStorageProducts] = useState(
    JSON.parse(localStorage.getItem("products"))
      ? JSON.parse(localStorage.getItem("products"))
      : []
  );

  const { toast } = useToast();

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const { data } = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      setProducts(data);
      setIsLoading(false);
    };

    getProducts();
  }, []);

  const setLocalStorage = (id) => {
    const isExist = storageProducts.some((product) => product.id == id);

    if (!isExist) {
      const storeData = products.find((product) => product.id === id);
      storageProducts.push(storeData);
      setStorageProducts([...storageProducts]);
      localStorage.setItem("products", JSON.stringify(storageProducts));
      toast({
        title: "The product has been added to the cart",
      });
    } else {
      toast({
        title: "You have already added this product to your cart",
      });
    }
  };

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center py-8">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center">
          {products.map((product) => (
            <ProductItem
              {...product}
              key={product.id}
              setLocalStorage={setLocalStorage}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
