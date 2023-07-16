"use client";

import Navbar from "@/app/components/Navbar";
import Video from "@/app/components/Video";


const SearchItems = ({ params }: any) => {
  return (
    <main>
      <Navbar />
      <Video feed={params.item} />
    </main>
  );
};

export default SearchItems;
