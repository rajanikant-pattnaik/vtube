"use client"
import { categories } from "@/helpers/constant";
import React from "react";

const FeedBar = ({ feed, setfeed }: any) => {
  return (
    <div className="flex justify-start sticky top-16 overflow-x-auto no-scrollbar py-4 bg-black z-0">
      {categories.map((category) => (
        <button
          key={category}
          className={`mx-8 text-ellipsis ${
            feed === category ? "bg-white text-black" : "bg-black text-white"
          } h-6 px-3 rounded m-6 cursor-pointer`}
          onClick={()=>setfeed(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FeedBar;
