import React, { useState } from "react";
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import surahs from "../data/surahs";
const AudioPlayer = () => {
  const [currentSurah, setCurrentSurah] = useState(surahs[0]);
  return (
    <div className='audio-player sticky bottom-0 bg-white w-full h-20'></div>
  );
};
export default AudioPlayer;
