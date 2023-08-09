"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast'
import UserContext from "@/context/UserContext";
import {AiOutlineMenu} from "react-icons/ai";
import axios from "axios";
import Drawer from "./Drawer";

const Navbar = () => {
  const [item, setitem] = useState("");
  const [acc, setAcc] = useState("ACCOUNT");
  const router=useRouter();
  const {username}=useContext(UserContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleLogout=async()=>{
   if(acc!=="ACCOUNT"){
    try {
      const res=await axios.get('/api/users/logout',{});
      toast.success("logout successful")
      router.push('/auth');
    } catch (error:any) {
      console.log(error.message);
    }
   
   }
  }
  useEffect(() => {
    if(username!==''){
      setAcc(username)
    }
  }, [username]);
  return (
    <nav className="w-full flex sticky top-0 justify-between p-6 h-20 bg-black">
      <div className="flex h-screen">
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}/>
      <div className="flex-1 p-4 overflow-y-auto">
        <button onClick={toggleDrawer} className="text-gray-500">
          <AiOutlineMenu/>
        </button>
      </div>
    </div>
      <Link href={`/`} className="pointer">
        VTUBE
      </Link>
      <div className="w-1/2 h-full border-2 border-white px-2">
        <input
          type="text"
          className="text-white w-4/5 h-full bg-transparent  focus:outline-0 border-r-2 "
          name="item"
          onChange={(e) => {
            setitem(e.target.value);
          }}
        />
        <button className="text-center">
          <Link href={`/searchItem/${item}`} className="text-white">
            search
          </Link>
        </button>
      </div>
      <div onClick={handleLogout}>{acc}</div>
      <Toaster/>
    </nav>
  );
};

export default Navbar;
