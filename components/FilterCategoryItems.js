import React from "react";

function FilterCategoryItems({ images, title, description, price }) {
  return (
    <div className="w-[43vw] border-2 border-slate-600 mb-5 rounded-md overflow-hidden">
      <img src={images[0]} alt={title} className="w-full h-[500px]" />
      <div className="py-4 px-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="font-semibold my-2">{description}</p>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default FilterCategoryItems;
