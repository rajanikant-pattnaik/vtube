"use client"
import Navbar from '@/app/components/Navbar';
import { fetchSearchData } from '@/helpers/fetchAPI';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const SearchItems = ({params}:any) => {
    const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchSearchData(params.item);
        console.log(result.items);
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
  )
}

export default SearchItems