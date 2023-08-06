"use client";
import { fetchVideoDetail } from "@/helpers/fetchAPI";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import {AiFillLike} from 'react-icons/ai'

const Search = ({ params }: any) => {
  const [data, setdata] = useState({
    snippet: {
      title: "",
      channelTitle: "",
      channelId: "",
    },
  });

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetchVideoDetail(params.videoId);
      console.log(res);
      setdata(res);
    };

    fetchDetails();
  }, [params.videoId]);
  return (
    <div>
      {data === undefined ? (
        <div>No Data</div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <div className="flex-col items-center">
            <h1 className="block text-4xl">{data.snippet.title}</h1>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${params.videoId}`}
              controls={true}
            />
            <div>
              <AiFillLike/>
            </div>
            <Link href={`/channel/${data.snippet.channelId}`}>
              {" "}
              <h1 className="block text-center">{data.snippet.channelTitle}</h1>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
