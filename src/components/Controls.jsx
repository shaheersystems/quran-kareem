import React, { useState } from "react";
import {
  PlayIcon,
  PauseIcon,
  TrackNextIcon,
  TrackPreviousIcon,
  ShuffleIcon,
  SpeakerLoudIcon,
} from "@radix-ui/react-icons";
function Controls() {
  const [isPlaying, setPlaying] = useState(true);
  const togglePlayPause = () => {
    setPlaying(!isPlaying);
  };
  return (
    <div className='w-full flex items-center justify-between'>
      <div>
        <button className='rounded-full px-4 py-2 bg-indigo-600 text-white'>
          <ShuffleIcon height={20} width={20} />
        </button>
      </div>
      <div className='flex items-center gap-4'>
        <button className='p-2 hover:bg-gray-100 rounded-full'>
          <TrackPreviousIcon height={20} width={20} />
        </button>
        {isPlaying ? (
          <button
            onClick={togglePlayPause}
            className='p-2 shadow rounded-full bg-indigo-600 text-white'
          >
            <PlayIcon height={25} width={25} />
          </button>
        ) : (
          <button
            onClick={togglePlayPause}
            className='p-2 shadow rounded-full bg-indigo-600 text-white'
          >
            <PauseIcon height={25} width={25} />
          </button>
        )}
        <button className='p-2 hover:bg-gray-100 rounded-full'>
          <TrackNextIcon height={20} width={20} />
        </button>
      </div>
      <button className='rounded-full px-4 py-2 bg-indigo-600 text-white'>
        <SpeakerLoudIcon height={20} width={20} />
      </button>
    </div>
  );
}

export default Controls;
