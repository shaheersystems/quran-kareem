import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader2 from "../components/Loader2";
import Loader from "../components/Loader";
function SingleSurah() {
  const { id } = useParams();
  const {
    data: surah,
    loading,
    error,
  } = useFetch(`http://api.alquran.cloud/v1/surah/${id}`);

  return (
    <div className='text-white py-2 pr-4 pl-2 flex-1 '>
      {error && <p className='text-xl text-red-500'>{error}</p>}
      <div
        className={
          "p-6  h-48 gap-2 flex flex-col items-start rounded-t-lg justify-center bg-stone-800"
        }
      >
        {loading && <Loader2 />}
        {!loading && (
          <div className='flex flex-col gap-4'>
            <h1 className='text-4xl font-bold font-serif'>
              {surah?.data.englishName}
            </h1>
            <p className='text-lg text-stone-300 font-semibold'>
              {surah?.data.englishNameTranslation} •{" "}
              {surah?.data.revelationType}
              {" • "}
              {surah?.data.numberOfAyahs} Ayahs
            </p>
            <span className='text-lg text-stone-100 font-semibold'></span>
          </div>
        )}
      </div>
      <div className='px-6 py-2 h-[16vh] bg-stone-700 flex items-center gap-5 justify-between'>
        <button
          title={`Play Surah ${surah?.data.englishName}`}
          className='bg-green-600 hover:scale-125 transition-all rounded-full p-2 text-black'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-6 h-6'
          >
            <path
              fillRule='evenodd'
              d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <div className='py-2 flex items-end'>
          <h1 className='text-4xl justify-end font-serif'>
            {surah?.data.name}
          </h1>
        </div>
      </div>
      <div className='px-6 py-10 h-[51vh] rounded-b-lg no-scrollbar overflow-y-scroll bg-stone-600 flex flex-wrap flex-row-reverse items-center justify-center gap-2'>
        {loading && <Loader />}
        {!loading &&
          surah?.data.ayahs.map((ayah, i) => {
            return (
              <div key={i}>
                <h2 className='leading-relaxed text-stone-200 font-arabic text-center text-6xl flex '>
                  . {ayah.text}
                </h2>
                <br />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SingleSurah;
