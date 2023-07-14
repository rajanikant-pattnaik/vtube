"use client"
import { categories } from "@/helpers/constant";
import React from "react";

const FeedBar = ({ feed, setfeed }: any) => {
  return (
    <div className="flex justify-start overflow-x-scroll no-scrollbar">
      {categories.map((category) => (
        <button
          key={category}
          className={`mx-8 text-ellipsis ${
            feed === category ? "bg-white text-black" : "bg-black text-white"
          } h-6 px-3 rounded`}
          onClick={()=>setfeed(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FeedBar;
