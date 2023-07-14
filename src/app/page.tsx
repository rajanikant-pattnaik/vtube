"use client";

import { useEffect, useState } from "react";
import { fetchSearchData } from "@/helpers/fetchAPI";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import FeedBar from "./components/FeedBar";

export default function Home() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchSearchData();
        setdata(result.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <main>
      <Navbar />
      <FeedBar/>
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
        <div>No Result</div>
      )}
    </main>
  );
}
