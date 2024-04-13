
import Image from "next/image";
import Link from "next/link";
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
      <div className=" w-1/3 mx-auto mt-4 -m-6">
          <img className='rounded-[200px]' src="/img/portal.png" alt=" portal" />
        </div>


      <div className="flex md:flex-row place-content-center gap-8 md:mx-auto mt-12 -mb-8 mx-8">
        <div className=" w-40 h-auto -mx-6 md:-mx-2 mt-2">
          <img className='rounded-[15px] shadow-lg' src="/img/vanity/z3.jpg" alt=" z3" />
        </div>
        <div className="w-40 h-auto -mx-12 md:-mx-2">
          <img className='rounded-[15px] shadow-lg' src="/img/vanity/ego.jpg" />
        </div>
        <div className="w-40 h-auto -mx-6 md:-mx-2 mt-2">
          <img className='rounded-[15px] shadow-lg' src="/img/vanity/x2.jpg" alt="x2" />
        </div>
      </div>

      <div className=" md:mt-8 mt-12 md:w-2/5 w-96  mb-24 mx-auto m-8 text-[#504241]">
        <div className="flex flex-row place-items-center ">
          <h1 className="md:text-9xl text-6xl font-bold">LCRT</h1>
          <h1 className="text-3xl font-bold">[la-sə-rāt] </h1>
        </div>
        <h2 className="md:text-6xl text-4xl">Nico Lacerenza</h2>
        <h2 className="md:text-4xl text-md font-mono">⚙︎ visual sound.artist <br></br>
          <Link href={"mailto:lcrt.nico@gmail.com"} className="md:text-4xl text-md font-mono underline">☸︎ lcrt.nico@gmail.com</Link></h2>

      </div>
    </div>
  );
}