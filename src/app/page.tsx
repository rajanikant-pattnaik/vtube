"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import FeedBar from "./components/FeedBar";
import Video from "./components/Video";

export default function Home() {
  const [feed, setfeed] = useState("Latest");
  return (
    <main>
      <Navbar/>
      <FeedBar feed={feed} setfeed={setfeed}/>
      <Video feed={feed} />
    </main>
  );
}
