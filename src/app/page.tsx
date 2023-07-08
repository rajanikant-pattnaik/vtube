"use client";

import { useEffect, useState } from "react";
import { fetchSearchData } from "@/helpers/fetchAPI";

export default function Home() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchSearchData();
      console.log(result);
      setdata(result.data);
      } catch (error) {
        console.log(error);
      }
      
    };
    fetchData();
  }, []);
  return <main>{data.length > 0 ? <div>
    {
      data.map((d:any)=>(
       // eslint-disable-next-line react/jsx-key
       <div>{d.title}</div>
      ))
    }
  </div> : <div>No Result</div>}</main>;
}
