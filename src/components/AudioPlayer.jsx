import React, { useState } from "react";
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import surahs from "../data/surahs";
const AudioPlayer = () => {
  const [currentSurah, setCurrentSurah] = useState(surahs[0]);
  return (
    <div className='audio-player'>
      <div className='w-full px-4 py-3 border rounded flex flex-col gap-4 items-center justify-center'>
        <DisplayTrack currentTrack={currentSurah} />
        <ProgressBar />
        <Controls />
      </div>
    </div>
  );
};
export default AudioPlayer;
