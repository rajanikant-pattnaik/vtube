"use client";

import { useEffect, useState } from "react";
import { fetchSearchData } from "@/helpers/fetchAPI";
import Navbar from "./components/Navbar";
import Image from "next/image";

export default function Home() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchSearchData();
        console.log(result.items);
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
                  <Image
                    src={d.snippet.thumbnails.default.url}
                    width={120}
                    height={90}
                    alt="d"
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
