import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";
// import surahs from "../data/surahs";
function SideBar() {
  const {
    data: surahs,
    loading,
    error,
  } = useFetch("http://api.alquran.cloud/v1/surah");
  return (
    <aside className='p-2 w-72 h-screen sticky top-0 space-y-2 text-stone-400 font-semibold'>
      <div className='rounded-lg bg-[#121212]'>
        <Link
          to='/'
          className='flex items-center gap-3 px-6 py-4 hover:text-white'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-5 h-5'
          >
            <path d='M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z' />
            <path d='M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z' />
          </svg>
          <span>Home</span>
        </Link>
        <button className='flex items-center gap-3 px-6 py-4 hover:text-white'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-5 h-5'
          >
            <path
              fillRule='evenodd'
              d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
              clipRule='evenodd'
            />
          </svg>
          <span>Search</span>
        </button>
      </div>
      <div className='rounded-lg bg-[#121212]'>
        <div className='py-2'>
          <Link
            to='/'
            class='px-6 py-2 flex items-center gap-3 hover:text-white'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-5 h-5'
            >
              <path d='M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z' />
            </svg>
            <span>Quran Surahs</span>
          </Link>
          <div className='no-scrollbar px-2 overflow-y-scroll h-[70vh] cursor-pointer'>
            {loading && <Loader />}
            {!loading &&
              surahs?.data?.map((surah) => {
                return (
                  <Link to={`/surahs/${surah.number}`}>
                    {" "}
                    <div
                      key={surah.number}
                      className='p-2 px-4 rounded-lg hover:bg-stone-900'
                    >
                      <div>
                        <p
                          className={`text-sm font-normal font-inter ${
                            surah.number === 5 ? "text-green-500" : "text-white"
                          }`}
                        >
                          Surah {surah.englishName}
                        </p>
                        <span className='text-xs'>
                          {surah.englishNameTranslation} •{" "}
                          {surah.revelationType}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
