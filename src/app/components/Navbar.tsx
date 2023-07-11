import React, { useState } from "react";

const Navbar = () => {
    const [item, setitem] = useState('')
  return (
    <div>
      Navbar
      <input type="text" className="text-black" name="item" onChange={(e)=>{
        setitem(e.target.value);
      }}/>
      <button onClick={()=>{
        console.log(item);
      }}>search</button>
    </div>
  );
};

export default Navbar;
