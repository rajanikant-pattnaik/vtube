import { categories } from "@/helpers/constant";
import React from "react";

const FeedBar = () => {
  return (
    <div className="flex justify-start overflow-x-scroll no-scrollbar">
      {categories.map((category) => (
        <div key={category} className="mx-10 text-ellipsis bg-white text-black">
          {category}
        </div>
      ))}
    </div>
  );
};

export default FeedBar;
