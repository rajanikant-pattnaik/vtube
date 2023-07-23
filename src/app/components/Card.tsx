"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ title, imageUrl, videoId }: any) => {
  const addHistory=()=>{
    console.log("history will be added")
  }
 
  return (
    <>
      <Link href={`/search/${videoId}`}>
      <div className="w-96 h-72 m-4 flex flex-col justify-center" onClick={addHistory}>
        <Image src={imageUrl} width={360} height={240} alt="image of video" className=" rounded-2xl "/>
        <h1 className="m-2">{title}</h1>
      </div>
      </Link>
    </>
  );
};

export default Card;
