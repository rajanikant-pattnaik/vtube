import UserContext from "@/context/UserContext";
import Link from "next/link";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import {AiOutlineClose} from 'react-icons/ai'

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  const { id } = useContext(UserContext);
  const handleCheck = () => {
    if (id === "") {
      toast.success("plz login first");
    }
  };
  return (
    <div
      className={`fixed inset-y-0 left-0 h-screen w-64 bg-black shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-10`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-semibold">VTUBE</h1>
        <button onClick={onClose} className="text-gray-500">
          <AiOutlineClose/>
        </button>
      </div>
      <Link href={`/`}>
        <div className="p-4">home</div>
      </Link>
      <Link href={`${id === "" ? "/" : "/history"}`} onClick={handleCheck}>
        <div className="p-4">history</div>
      </Link>
      <Link href={`${id === "" ? "/" : "/fav"}`} onClick={handleCheck}>
        <div className="p-4">favourite</div>
      </Link>
      <Link href={`${id === "" ? "/" : "/wl"}`} onClick={handleCheck}>
        <div className="p-4">watch-later</div>
      </Link>
    </div>
  );
};

export default Drawer;
