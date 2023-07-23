"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [item, setitem] = useState("");
  const [acc,setAcc]=useState('ACCOUNT')
  useEffect(() => {
    const val=localStorage.getItem('user')
    if(val!==null){
      const userval=JSON.parse(val)
      console.log(userval)
      setAcc(userval.user.username)
    }
  }, [])
  return (
    <nav className="w-full flex sticky top-0 justify-between p-6 h-20 bg-black">
      <Link href={`/`} className="pointer">VTUBE</Link>
      <div className="w-1/2 h-full border-2 border-white px-2" >
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
      {acc}
    </nav>
  );
};

export default Navbar;
