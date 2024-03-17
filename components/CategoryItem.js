import Link from "next/link";
import React from "react";

function CategoryItem({ name, image }) {
  return (
    <div className="w-[400px] rounded-md overflow-hidden border-2 border-slate-500 relative">
      <img src={image} alt={name} />
      <div className="bg-slate-700 opacity-70 py-4 px-3 absolute bottom-0 right-0 left-0">
        <Link
          href={`/category/${name}`}
          className="font-semibold text-white text-[22px]"
        >
          {name}
        </Link>
      </div>
    </div>
  );
}

export default CategoryItem;
