import React from 'react';
import { Link } from '@/components/Link';
export default function EP() {
  return (
    <div className=" flex flex-col place-items-center w-11/12">
      <div className=' md:h-10/12 h-3/6 w-full flex flex-col place-content-center mx-auto'>
        <img className='rounded-[300px] -mt-12 md:mx-12 md:-mb-28 mb-4' src="/img/ULep.png" alt=" UL" />

        <div className=" mx-12 mb:-mt-12 mt-2">
          <h1 className="text-center font-black md:text-6xl text-2xl">LCRT • Undefined Landscapes EP <br></br> OUT 31/05</h1>
        </div>
        <Link appleL={'https://www.apple.com'} spotiL={'https://www.apple.com'} bandcL={'https://www.apple.com'} soundL={''}></Link>

      </div>
      <div className='flex md:flex-row flex-col place-items-center place-content-evenly w-4/6 my-4'>
        <img className='rounded-[24px] w-3/5 shadow-2xl shadow-orange-400/60' src="/img/ul.jpg" alt=" UL" />
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

      <div className='flex md:flex-row flex-col place-items-center place-content-evenly w-10/12 my-8'>
          <img className=' rounded-3xl md:w-2/6 w-4/5 -mb-8 md:mb-0' src="/img/mida.jpg" alt="mida" />
          <div className='flex flex-col place-content-center w-[500px] '>
            <h1 className="text-center font-black md:text-4xl text-2xl">Mida <br></br> single n*2</h1>
            <Link
              appleL={'https://music.apple.com/album/mida/1744570531?i=1744570533'}
              spotiL={'https://open.spotify.com/album/3ItY4g99iZrgBIqBpiLmkX'}
              bandcL={'https://lcrt.bandcamp.com/track/mida'} soundL=''>
            
            </Link>
            <iframe className="rounded-[15px] w-[370px] h-[120px] my-2 mx-auto" allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1813655748%3Fsecret_token%3Ds-Mj0sKznYiBz&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          </div>

        </div>
        <div className='flex md:flex-row flex-col place-items-center place-content-evenly w-10/12 my-8'>
          <img className=' rounded-3xl md:w-2/6 w-4/5 -mb-8 md:mb-0' src="/img/ul.jpg" alt=" UL" />
          <div className='flex flex-col place-content-center w-[500px] '>
            <h1 className="text-center font-black md:text-4xl text-2xl">Undefined Landscapes <br></br> single n*1</h1>
            <Link
              appleL={'https://music.apple.com/album/undefined-landscapes-single/1740904572'}
              spotiL={'https://open.spotify.com/track/0caMaRhtJarY364EOZJHlZ?si=b430a3777e14497e'}
              bandcL={'https://lcrt.bandcamp.com/track/undefined-landscapes'} soundL=''>
            </Link>
            <iframe className="rounded-[15px] w-[370px] h-[120px] my-2 mx-auto" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1803082323&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
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
    
      <div className=" hidden flex-row w-10/12 place-content-center mx-auto md:-mt-6 -mt-4 mb-8" >
        <iframe height="400" className=" rounded-[15px] md:w-64 md:h-64 w-40 h-40 -m-4 -my-4" src="https://player.vimeo.com/video/935037494?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
        <iframe height="400" className=" rounded-[15px] md:w-64 md:h-64 w-40 h-40 -m-6 mt-8" src="https://player.vimeo.com/video/935029672?h=03947efb64&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
        <iframe height="400" className=" rounded-[15px] md:w-64 md:h-64 w-40 h-40 -m-4 -my-4" src="https://player.vimeo.com/video/935031122?h=452d1d40a1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
      </div>

      <div className="hidden place-content-center gap-8 md:mt-12 md:mx-8 mx-0">
                <div className=" w-24 h-auto -mx-6 md:-mx-2">
                    <img className='rounded-[15px] shadow-lg' src="/img/vanity/z3.jpg" alt=" z3" />
                </div>
                <div className="w-24 h-auto -mx-12 md:-mx-2 mt-2">
                    <img className='rounded-[15px] shadow-lg' src="/img/vanity/ego.jpg" />
                </div>
                <div className="w-24 h-auto -mx-6 md:-mx-2">
                    <img className='rounded-[15px] shadow-lg' src="/img/vanity/x2.jpg" alt="x2" />
                </div>
            </div>

    </div>
  );
}