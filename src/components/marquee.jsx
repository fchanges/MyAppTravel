"use client";

import { useState } from "react";

const MarqueeNewsStyle = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="w-full">
      <div
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        <marquee direction="left" scrolldelay={isPlaying ? 0 : 1000000}>
          THIS SITE IS UNDER CONSTRUCTION & STILL IN THE DEVELOPMENT STAGE
        </marquee>
      </div>
    </div>
  );
};

export default MarqueeNewsStyle;
