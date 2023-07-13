import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [item, setitem] = useState('')
  return (
    <div>
      Navbar
      <input type="text" className="text-black" name="item" onChange={(e)=>{
        setitem(e.target.value);
      }}/>
      <button><Link href={`/searchItem/${item}`} className="text-white" >search</Link></button>
    </div>
  );
};

export default Navbar;
