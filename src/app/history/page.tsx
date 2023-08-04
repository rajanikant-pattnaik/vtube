"use client";

import UserContext from '@/context/UserContext';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'
import Card from '../components/Card';

const Page = () => {
  const router=useRouter();
  const [data, setdata] = useState([])
  const {id}=useContext(UserContext);

  useEffect(() => {
    const getHistory=async()=>{
      try {
         if(id!==''){
          const res=await axios.post('/api/history/getAllHistory',{userId:id});
          console.log(res.data.allHistory);
          setdata(res.data.allHistory)
         }
      } catch (error:any) {
        console.log(error.message)
      }
    }
     getHistory();
  }, [id])
  return (
    <div>
      {data?.length > 0 ? (
        <div>
          {
            <div>
              
              <div className="flex flex-wrap justify-center no-scrollbar">
                {data.map((d: any) => (
                  <div key={d._id}>
                    <Card
                      title={d.title}
                      imageUrl={d.image}
                      videoId={d.vId}
                    />
                  </div>
                ))}
              </div>
            </div>
          }
        </div>
      ) : (
        <div className="h-full w-full flex justify-center items-center">
         
        </div>
      )}
    </div>
  )
}

export default Page