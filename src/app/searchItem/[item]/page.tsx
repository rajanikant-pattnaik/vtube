"use client";
import Card from "@/app/components/Card";
import Navbar from "@/app/components/Navbar";
import { fetchSearchData } from "@/helpers/fetchAPI";
import React, { useEffect, useState } from "react";

const SearchItems = ({ params }: any) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchSearchData(params.item);
        setdata(result.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [params.item]);
  return (
    <main>
      <Navbar />
      {data?.length > 0 ? (
        <div>
          {
            <div className="flex flex-wrap justify-center no-scrollbar">
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
};

export default SearchItems;
