"use client";

import UserContext from "@/context/UserContext";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";

const Card = ({ title, imageUrl, videoId }: any) => {
  const [userId, setuserId] = useState("");
  const [isLike, setisLike] = useState(false);
  const [isWl, setisWl] = useState(false);
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
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const addWl=async()=>{
    try {
      const res2 = await axios.post("/api/wl/addWl", {
        userId,
        vId: videoId,
        title,
        image: imageUrl,
      });
    } catch (error:any) {
      console.log(error.message);
    }
  }

  const addFavo = async () => {
    try {
      const res = await axios.post("/api/fav/addFav", {
        userId,
        vId: videoId,
        title,
        image: imageUrl,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (id !== "") {
      setuserId(id);
    }
    const checkFav = async () => {
      const res = await axios.post("/api/fav/isFav", {
        userId: id,
        vId: videoId,
      });
      setisLike(res.data.data);
    };
    const checkWl=async ()=>{
      const res=await axios.post("/api/wl/isWl",{
        userId:id,
        vId:videoId,
      })
      console.log(res.data.data);
      setisWl(res.data.data)
    }
    checkFav();
    checkWl();
  }, [id, videoId]);

  return (
    <>
      <div className="w-96 h-72 m-4 flex flex-col justify-center">
        <Link href={`/search/${videoId}`} onClick={addHistory}>
          <Image
            src={imageUrl}
            width={360}
            height={240}
            alt="image of video"
            className=" rounded-2xl w-full"
          />
        </Link>
        <h1 className="m-2">{title}</h1>
        <div className="flex justify-between">
          <button
            onClick={addFavo}
            className={`${isLike ? "text-blue-700" : ""}`}
          >
            <AiFillLike />
          </button>
          <button
            onClick={addWl}
            className={`${isWl ? "text-blue-700" : ""}`}
          >
            <MdOutlineWatchLater />
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
