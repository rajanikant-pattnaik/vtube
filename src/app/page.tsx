"use client";

import { useEffect, useState } from "react";
import { fetchSearchData } from "@/helpers/fetchAPI";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import FeedBar from "./components/FeedBar";
import { ColorRing } from "react-loader-spinner";

export default function Home() {
  const [data, setdata] = useState([]);
  const [feed, setfeed] = useState("Latest");
  const [loader, setloader] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setloader(true);
        const result = await fetchSearchData(feed);
        setdata(result.items);
      } catch (error) {
        console.log(error);
      } finally {
        setloader(false);
      }
    };
    fetchData();
  }, [feed]);
  return (
    <main>
      <Navbar />
      <FeedBar feed={feed} setfeed={setfeed} />
      {data?.length > 0 ? (
        <div>
          {
            <div className="flex flex-wrap justify-center no-scrollbar">
              {data.map((d: any) => (
                <div key={d.id.videoId} className="m-2 flex justify-center">
                  <Card
                    title={d.snippet.title}
                    imageUrl={d.snippet.thumbnails.medium.url}
                    videoId={d.id.videoId}
                  />
                </div>
              ))}
            </div>
          }
        </div>
      ) : (
        <div className="h-full w-full flex justify-center items-center">
          {loader ? (
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          ) : (
            "No Result"
          )}
        </div>
      )}
    </main>
  );
}
