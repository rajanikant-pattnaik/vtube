"use client";
import React, { useEffect } from "react";
import ReactPlayer from "react-player";

const Search = ({ params }: any) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <ReactPlayer url={`https://www.youtube.com/watch?v=${params.videoId}`}  controls={true}/>
    </div>
  );
};

export default Search;
