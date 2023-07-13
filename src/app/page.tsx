"use client";

import { useEffect, useState } from "react";
import { fetchSearchData } from "@/helpers/fetchAPI";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

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
      {data?.length > 0 ? (
        <div>
          {
            <div className="flex flex-wrap">
              {data.map((d: any) => (
                <div key={d.id.videoId} className="m-2">
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
