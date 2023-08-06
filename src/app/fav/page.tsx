"use client";

import UserContext from "@/context/UserContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { Toaster, toast } from "react-hot-toast";

const Page = () => {
  const router = useRouter();
  const [data, setdata] = useState([]);
  const { id } = useContext(UserContext);
  const deleteALLFav = async () => {
    if (id !== "") {
      try {
        const res = await axios.post("/api/fav/deleteAllFav", {
          userid: id,
        });
        console.log(res);
        toast.success("ALL fav got deleted");
        window.location.reload();
      } catch (err: any) {
        console.log(err.message);
        toast.error(err.message);
      }
    }
  };

  useEffect(() => {
    const getFav = async () => {
      try {
        if (id !== "") {
          const res = await axios.post("/api/fav/getAllFav", {
            userId: id,
          });
          setdata(res.data.allfav)
        }
      } catch (error: any) {
        console.log(error.message);
      }
    };
    getFav();
  }, [id]);
  return (
    <div>
      <Navbar />
      <div className="ml-20">
        <button
          className="w-30 h-10 bg-white text-black cursor-pointer"
          onClick={deleteALLFav}
        >
          delete all
        </button>
      </div>
      {data?.length > 0 ? (
        <div>
          {
            <div>
              <div className="flex flex-wrap justify-center no-scrollbar">
                {data.map((d: any) => (
                  <div key={d._id}>
                    <Card title={d.title} imageUrl={d.image} videoId={d.vId} />
                  </div>
                ))}
              </div>
            </div>
          }
        </div>
      ) : (
        <div className="h-full w-full flex justify-center items-center">
          no history is present.
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default Page;
