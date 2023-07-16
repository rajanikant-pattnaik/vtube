"use client";

import { useEffect, useState } from "react";
import { fetchSearchData } from "@/helpers/fetchAPI";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import FeedBar from "./components/FeedBar";
import { ColorRing } from "react-loader-spinner";
import Video from "./components/Video";

export default function Home() {
  const [feed, setfeed] = useState("Latest") 
  return (
    <main>
      <Navbar />
      <FeedBar feed={feed} setfeed={setfeed} />
      <Video feed={feed}/>
    </main>
  );
}
