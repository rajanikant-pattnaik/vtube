"use client";

import UserContext from "@/context/UserContext";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";

const Card = ({ title, imageUrl, videoId }: any) => {
  const [userId, setuserId] = useState("");
  const { id } = useContext(UserContext);
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

  const addFavo = async () => {
    try {
      const res = await axios.post("/api/fav/addFav", {
        userId,
        vId: videoId,
        title,
        image: imageUrl,
      });
      console.log(res.data);
      console.log("fav is added");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (id !== "") {
      setuserId(id);
    }
  }, [id]);

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
          <button onClick={addFavo}>
            <AiFillLike />
          </button>
        </div>
      </Link>
    </>
  );
};

export default Card;
