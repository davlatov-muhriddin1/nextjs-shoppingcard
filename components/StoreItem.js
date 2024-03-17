"use client";
import { FaTrash } from "react-icons/fa";

function StoreItem({ id, images, title, price, deleteStorageProduct }) {
  return (
    <div className="flex items-center justify-between pr-4 rounded-md w-[650px] max-w-full bg-gray-600">
      <div>
        <img
          src={images[0]}
          alt={title}
          className="w-[100px] h-[100px] rounded-md"
        />
      </div>
      <div className="mx-3 flex-grow">
        <h2 className="font-bold text-[20px] mb-3 text-white">{title}</h2>
        <p className="font-semibold text-[18px] text-white">${price}</p>
      </div>
      <div>
        <FaTrash
          onClick={() => deleteStorageProduct(id)}
          className="text-white hover:text-red-700 text-2xl"
        />
      </div>
    </div>
  );
}

export default StoreItem;
