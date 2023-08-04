import React, { useEffect, useState } from "react";
import Card from "./Card";
import { fetchSearchData } from "@/helpers/fetchAPI";
import { Oval } from "react-loader-spinner";

const Video = ({ feed }: any) => {
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setdata([]);
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
    <div>
      {data?.length > 0 ? (
        <div>
          {
            <div>
              <h1 className="text-center text-4xl mb-3">
                {feed}
              </h1>
              <div className="flex flex-wrap justify-center no-scrollbar">
                {data.map((d: any) => (
                  <div key={d.id.videoId}>
                    <Card
                      title={d.snippet.title}
                      imageUrl={d.snippet.thumbnails.medium.url}
                      videoId={d.id.videoId}
                    />
                  </div>
                ))}
              </div>
            </div>
          }
        </div>
      ) : (
        <div className="h-full w-full flex justify-center items-center">
          {loader ? (
            <Oval
              height={80}
              width={80}
              color="white"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="gray"
              strokeWidth={1}
              strokeWidthSecondary={3}
            />
          ) : (
            "No Result"
          )}
        </div>
      )}
    </div>
  );
};

export default Video;
