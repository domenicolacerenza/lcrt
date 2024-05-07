import React from 'react';
import { Link } from '@/components/Link';


export default function Home() {
  return (
    <div className="flex flex-col place-items-center  w-11/12">
      <div className='w-full flex flex-col place-items-center mx-auto'>

        <img className='rounded-[24px] md:mx-12 md:-mb-12 mb-4 md:mt-20 mt-2 md:w-3/6 w-3/4 shadow-2xl shadow-orange-400/60' src="/img/mida.jpg" alt=" mida" />
        <div className="flex flex-col w-[500px] md:mx-12 mx-0 mb:-mt-12 -mt-2 mb-4">
          <h1 className="text-center font-black md:text-6xl text-2xl">Mida • single n*2 <br></br>OUT 17/05</h1>
        </div>

        <div className='flex md:flex-row flex-col place-items-center place-content-evenly w-10/12 my-8'>
          <img className='rounded-[600px] w-[500px]' src="/img/ULalfax.png" alt=" UL" />
          <div className='flex flex-col place-content-center w-[500px] '>
            <h1 className="text-center font-black md:text-4xl text-2xl">Undefined Landscapes <br></br> single n*1</h1>
            <Link
              appleL={'https://music.apple.com/it/album/undefined-landscapes-single/1740904572'}
              spotiL={'https://open.spotify.com/track/0caMaRhtJarY364EOZJHlZ?si=b430a3777e14497e'}
              bandcL={'https://lcrt.bandcamp.com/track/undefined-landscapes'}>
            </Link>
            <iframe className="rounded-[15px] w-[370px] h-[120px] my-2 mx-auto" allow="autoplay" src="https://bandcamp.com/EmbeddedPlayer/track=3862983779/size=large/bgcol=ffffff/linkcol=CA9B84/tracklist=false/artwork=small/transparent=true/"></iframe>
          </div>

        </div>
      </div>



      <div className="card w-fit mx-auto place-content-center m-8 bg-[#1f1051]/40 shadow-md">
        <div className="card-body flex flex-row place-content-between -m-6">
          <img className=' md:w-40 md:h-40 w-24 h-24 rounded-[15px] my-auto' src="/img/deepcover.png" alt=" cover" />
          <div className="flex flex-col place-content-center">
            <h2 className="card-title font-bold md:text-2xl text-sm">DEEP DIVE ⎋ PLAYLIST<br></br> Waveform ◎ Refracted</h2>
            <div className="flex flex-row place-items-center mx-auto"><h2 className="md:text-2xl text-md">Weekly Updated | click </h2>
              <h2 className="md:text-4xl text-xl ml-2 text-[#E1D9E2]">⎋</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}