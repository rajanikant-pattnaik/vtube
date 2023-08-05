"use client";

import UserContext from '@/context/UserContext';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import { Toaster, toast } from 'react-hot-toast';

const Page = () => {
  const router=useRouter();
  const [data, setdata] = useState([])
  const {id}=useContext(UserContext);
  const deleteALL=async()=>{
     if(id!==''){
      try {
        const res=await axios.post('/api/history/deleteALL',{userid:id});
        console.log(res);
        toast.success("ALL history got deleted"); 
        router.push('/history')
        window.location.reload();
      } catch (err:any) {
        console.log(err.message);
        toast.error(err.message)
      }
      
     }
  }

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
      <Navbar/>
      <div className='ml-20'>
        <button className='w-30 h-10 bg-white text-black cursor-pointer' onClick={deleteALL}>delete all</button>
      </div>
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
           no history is present.
        </div>
      )}
      <Toaster/>
    </div>
  )
}

export default Page