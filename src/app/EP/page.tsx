import React from 'react';
import { Link } from '@/components/Link';
export default function EP() {
  return (
    <div className=" flex flex-col place-items-center w-11/12">
      <div className=' md:h-screen h-3/5 w-full flex flex-col place-content-center mx-auto'>
        <img className='rounded-[900px] -mt-12 md:mx-12 md:-mb-28 mb-4' src="/img/ULep.png" alt=" UL" />

        <div className=" mx-12 mb:-mt-12 mt-2">
          <h1 className="text-center font-black md:text-6xl text-2xl">LCRT • Undefined Landscapes EP <br></br> OUT 31/05</h1>
        </div>
        <Link appleL={'https://www.apple.com'} spotiL={'https://www.apple.com'} bandcL={'https://www.apple.com'}></Link>

      </div>
      <div className='flex md:flex-row flex-col place-items-center place-content-evenly w-4/6 my-4'>
        <img className='rounded-[24px] w-[160px] shadow-2xl shadow-orange-400/60' src="/img/ul.jpg" alt=" mida" />
        <div className='flex flex-row '>
          <div className='flex flex-col w-[500px]'>
            <h1 className="text-center font-black text-4xl">Undefined Landscape • single n*1</h1>
            <iframe className="rounded-[15px] w-[370px] h-[120px] my-2 mx-auto" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1803082323&color=%23CA9B84&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true&visual=true&buying=false"></iframe>
          </div>
        </div>
      </div>
      <div className='flex md:flex-row flex-col place-items-center place-content-evenly w-4/6 my-4'>
        <img className='rounded-[24px] w-[160px] shadow-2xl shadow-orange-400/60' src="/img/mida.jpg" alt=" mida" />
        <div className='flex flex-row '>
          <div className='flex flex-col w-[500px]'>
            <h1 className="text-center font-black text-4xl">Mida • single n*2</h1>
            <iframe className="rounded-[15px] w-[370px] h-[120px] my-2 mx-auto" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1803082323&color=%23CA9B84&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true&visual=true&buying=false"></iframe>
          </div>
        </div>
      </div>
      <div className="flex flex-row md:gap-20 gap-2 w-fit place-content-center mx-auto  mt-4" >
        <div className=" lg:w-64 md:w-34 w-20 h-auto m-2">
          <img className='rounded-[15px] shadow-xl shadow-orange-400/60' src="/img/vanity/land2.webp" />
        </div>
        <div className=" lg:w-64 md:w-34 w-24 h-auto mb-8 m-4">
          <img className='rounded-[15px] shadow-xl shadow-orange-400/60' src="/img/vanity/land1.webp" />
        </div>
        <div className=" lg:w-64 md:w-34 w-20 h-auto m-2">
          <img className='rounded-[15px] shadow-xl shadow-orange-400/60' src="/img/vanity/land3.webp" />
        </div>

      </div>
    </div>

  );
}