"use client";
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
      {data?.length === 0 ? (
        <div>
          <h1>NO DATA</h1>
        </div>
      ) : (
        <div>
          {data.map((d: any) => (
            <div key={d.id}>
              <Image src={d.brandingSettings.image.bannerExternalUrl} width={600} height={200} alt="banner"/>
              <Image
                src={d.snippet.thumbnails.medium.url}
                width={240}
                height={240}
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
