"use client";

import Loader from "@/components/Loader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";
import { useEffect, useState } from "react";

function Page({ params }) {
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    const getProductDetail = async () => {
      const { data } = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${params.id}`
      );

      setProductDetail(data);
    };

    getProductDetail();
  }, []);

  return (
    <>
      <div className="h-[80vh]">
        {productDetail.images ? (
          <>
            <Carousel className={"w-full h-[80vh]"}>
              <CarouselContent>
                {productDetail.images.map((item) => (
                  <CarouselItem>
                    <img
                      src={item}
                      alt="slider image"
                      className="w-full h-[80vh]"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </>
        ) : (
          <div className="h-full flex justify-center items-center">
            <Loader />
          </div>
        )}
      </div>

      {productDetail ? (
        <div className="py-3 ">
          <h1 className="text-3xl font-semibold">{productDetail.title}</h1>
          <p className="text-2xl text-gray-500 my-3">
            {productDetail.description}
          </p>
          <h4 className="text-2xl font-semibold">
            Price: ${productDetail.price}
          </h4>
          <h4 className="text-2xl font-semibold mt-3">
            Category: {productDetail?.category?.name}
          </h4>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Page;
