"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ title, imageUrl, videoId }: any) => {
 
  return (
    <>
      <Link href={`/search/${videoId}`}>
      <div>
        <Image src={imageUrl} width={320} height={180} alt="image of video" />
        <h1>{title}</h1>
      </div>
      </Link>
    </>
  );
};

export default Card;
