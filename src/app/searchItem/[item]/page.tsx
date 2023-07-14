"use client";
import Card from "@/app/components/Card";
import Navbar from "@/app/components/Navbar";
import { fetchSearchData } from "@/helpers/fetchAPI";
import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

const SearchItems = ({ params }: any) => {
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchSearchData(params.item);
        setdata(result.items);
      } catch (error) {
        console.log(error);
      }
      finally{
        setloader(false);
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
        <div className="h-full w-full flex justify-center items-center">
          {loader ? (
            <div>
             <h1>Latest results of term {params.item}</h1>
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
           </div>
          ) : (
            "No Result"
          )}
        </div>
      )}
    </main>
  );
};

export default SearchItems;
