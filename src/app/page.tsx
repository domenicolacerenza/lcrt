import React from 'react';
import { Link } from '@/components/Link';
import Image from 'next/image'
import Pic1 from '/public/img/ULfinal.jpg'
import Pic2 from '/public/img/mida.jpg'
import Pic3 from '/public/img/ul.jpg'


export default function Home() {
  return (
    <div className="flex flex-col place-items-center  w-11/12">
      <div className='w-full flex flex-col place-items-center mx-auto'>

        <div className='md:mx-12 md:-mb-12 mb-4 md:mt-20 -mt-12 md:w-2/6 w-8/12 shadow-xl shadow-orange-400/20'>
          <Image className='rounded-[15px]' src={Pic1} width={512} height={512} alt="EP" loading="lazy" />
        </div>
        <div className="flex flex-col w-10/12 md:mx-12 mx-0 mb:-mt-12 -mt-8 -mb-6">
          <h1 className="text-center w-full font-black md:text-6xl text-2xl">Undefined Landscapes EP <br></br>OUT NOW</h1>
        </div>
        <div className='flex -mb-6'>
          <Link appleL={'https://music.apple.com/album/undefined-landscapes-ep/1744414032'} spotiL={'spotify:album:4kU060X2xB1YVLNWKUHuP0'} bandcL={'https://lcrt.bandcamp.com/album/undefined-landscapes'} soundL={'https://soundcloud.com/lcrt/sets/undefined-landscapes'}>
          </Link>
        </div>

        <div className=' hidden md:flex'>
          <iframe className="rounded-[15px] w-10/12 md:w-[500px] h-[220px] md:h-[320px] my-2 mx-auto md:-mb-16" allow="autoplay" src="https://bandcamp.com/EmbeddedPlayer/album=2256355435/size=large/bgcol=ffffff/linkcol=CCA1A0/artwork=small/transparent=true/"></iframe>
        </div>

        <div className='flex flex-row place-items-center place-content-evenly w-10/12 md:w-4/6 my-4 -mb-6 '>

          <div className='flex flex-col place-items-center w-[400px] '>
            <div className='md:w-[200px] w-[120px] -mb-6 md:mb-0'>
              <Image className='rounded-3xl' src={Pic2} width={512} height={512} alt="mida" loading="lazy" />
            </div>
            <h1 className="text-center w-[200px] md:w-[300px] font-black md:text-4xl text-sm -mb-4">Mida <br></br> single n*2</h1>
            <Link
              appleL={'https://music.apple.com/album/mida/1744570531?i=1744570533'}
              spotiL={'https://open.spotify.com/album/3ItY4g99iZrgBIqBpiLmkX'}
              bandcL={'https://lcrt.bandcamp.com/track/mida'} soundL={''}/>
  
          </div>
          <div className='flex flex-col place-items-center w-[400px]'>
            <div className=' rounded-3xl md:w-[200px] w-[120px] -mb-6 md:mb-0' >
              <Image className='rounded-3xl' src={Pic3} width={512} height={512} alt="ul single" loading="lazy" />
            </div>

            <h1 className="text-center w-[200px] md:w-[300px] font-black md:text-4xl text-sm -mb-4">Undefined Landscapes <br></br> single n*1</h1>
            <Link
              appleL={'https://music.apple.com/album/undefined-landscapes-single/1740904572'}
              spotiL={'https://open.spotify.com/track/0caMaRhtJarY364EOZJHlZ?si=b430a3777e14497e'}
              bandcL={'https://lcrt.bandcamp.com/track/undefined-landscapes'} soundL={''}/>
        
          </div>
        </div>


        <div className="card w-fit mx-auto place-content-center m-8 bg-[#1f1051]/40 shadow-md">
          <div className="card-body flex flex-row place-content-between -m-6">
            <div className=' md:w-40 md:h-40 w-24 h-24 rounded-[15px] my-auto' >
              <Image className='rounded-3xl' src="/img/deepcover.png" width={512} height={512} alt="mida" />
            </div>
            <div className="flex flex-col place-content-center">
              <h2 className="card-title font-bold md:text-2xl text-sm">DEEP DIVE ⎋ PLAYLIST<br></br> Waveform ◎ Refracted</h2>
              <div className="flex flex-row place-items-center mx-auto"><h2 className="md:text-2xl text-md">Weekly Updated | click </h2>
                <h2 className="md:text-4xl text-xl ml-2 text-[#E1D9E2]">⎋</h2>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}