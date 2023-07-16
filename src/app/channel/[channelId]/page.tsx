"use client";
import Navbar from "@/app/components/Navbar";
import { channelDetails } from "@/helpers/fetchAPI";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = ({ params }: any) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const funcDetail = async () => {
      const res = await channelDetails(params.channelId);
      console.log(res);
      setdata(res);
    };

    funcDetail();
  }, [params.channelId]);
  return (
    <>
     <Navbar/>
      {data?.length === 0 ? (
        <div>
          <h1>NO DATA</h1>
        </div>
      ) : (
        <div>
          {data.map((d: any) => (
            <div key={d.id} className="w-screen" style={{height:'80vh'}}>
              <Image
                src={d.brandingSettings.image.bannerExternalUrl}
                width={500}
                height={500}
                className="w-full h-2/5"
                alt="banner"
              />
              <Image
                src={d.snippet.thumbnails.medium.url}
                width={120}
                height={120}
                alt="youtube"
              />
              <h1 className="inline">{d.snippet.title}</h1>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Page;
