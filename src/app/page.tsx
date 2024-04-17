import Image from "next/image";
import React from 'react';

export default function Home() {
  return (
    <div className=" flex flex-col place-content-center">
      <div className=" flex mx-auto -my-24 md:mt-8 mt-16 ">
        <Image
          src="/img/logoo.svg"
          alt="_Logo0"
          width={150}
          height={35}
          priority
        />
      </div>

      <img className='rounded-[300px] md:mx-48 mx-0 mt-4' src="/img/ULalfa.png" alt=" UL" />
      <h1 className="md:text-8xl text-5xl font-bold text-center mb:-mt-52 -mt-12 mb:mb-48 -mx-42 mb-8">Undefined Landscapes <br></br> OUT 19/04</h1>


      <div className="card w-fit mx-auto place-content-center m-8 bg-[#1f1051]/40 shadow-md">
        <div className="card-body flex flex-row place-content-between -m-6">
          <img className=' md:w-40 md:h-40 w-24 h-24 rounded-[15px] my-auto' src="/img/deepcover.png" alt=" cover" />
          <div className="flex flex-col place-content-center md:mx-6 mx-0">
            <h2 className="card-title lg:text-4xl font-bold md:text-2xl sm:text-sm">DEEP DIVE ⎋ PLAYLIST <br></br> Waveform ◎ Refracted</h2>
            <div className="flex flex-row place-items-center mx-auto"><h2 className="md:text-2xl text-xs">Weekly Updated | click </h2>
              <h2 className="md:text-6xl text-xl ml-2 text-[#E1D9E2]">⎋</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}