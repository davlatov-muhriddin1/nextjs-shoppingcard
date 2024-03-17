"use client";

import CategoryItem from "@/components/CategoryItem";
import Loader from "@/components/Loader";
import axios from "axios";
import { useEffect, useState } from "react";

function Page() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      setIsLoading(true);
      const { data } = await axios.get(
        "https://api.escuelajs.co/api/v1/categories"
      );

      setCategories(data);
      setIsLoading(false);
    };
    getCategories();
  }, []);

  return (
    <div className="py-5">
      {!isLoading ? (
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <CategoryItem {...category} key={category.id} />
          ))}
        </div>
      ) : (
        <div className={"flex justify-center py-8"}>
          <Loader />
        </div>
      )}
    </div>
  );
}

export default Page;
