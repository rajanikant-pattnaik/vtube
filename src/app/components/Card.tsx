"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Card = ({ title, imageUrl, videoId }: any) => {
  const [userId, setuserId] = useState("");
  const addHistory = async () => {
    try {
      if (userId !== "") {
        const res = await axios.post("/api/history/addHistory", {
          userId,
          vId: videoId,
          title,
          image: imageUrl,
        });
        console.log(res.data);
        console.log("history will be added");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const val = localStorage.getItem("user");
    if (val !== null) {
      const userval = JSON.parse(val);
      // console.log(userval.tokenData.id);
      setuserId(userval.tokenData.id);
    }
  }, []);

  return (
    <>
      <Link href={`/search/${videoId}`}>
        <div
          className="w-96 h-72 m-4 flex flex-col justify-center"
          onClick={addHistory}
        >
          <Image
            src={imageUrl}
            width={360}
            height={240}
            alt="image of video"
            className=" rounded-2xl "
          />
          <h1 className="m-2">{title}</h1>
        </div>
      </Link>
    </>
  );
};

export default Card;
