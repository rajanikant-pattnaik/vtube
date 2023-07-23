"use client";

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Page = () => {
  const router=useRouter();
  const val=localStorage.getItem('user')||''
  if(val===''){
   router.push('/');
  }
  let userId=''
  if(val!==''){
    const userval=JSON.parse(val);
    userId=userval.user._id
  }
  
  useEffect(() => {
    const getHistory=async()=>{
      try {
         if(userId!==''){
          const res=await axios.post('/api/history/getAllHistory',{userId});
          console.log(res.data);
         }
      } catch (error:any) {
        console.log(error.message)
      }
    }
     getHistory();
  }, [userId])
  return (
    <div>page</div>
  )
}

export default Page