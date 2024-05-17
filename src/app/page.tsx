import React from 'react';
import { Link } from '@/components/Link';


export default function Home() {
  return (
    <div className="flex flex-col place-items-center  w-11/12">
      <div className='w-full flex flex-col place-items-center mx-auto'>

        <img className='rounded-[200px] md:mx-12 md:-mb-12 mb-4 md:mt-20 mt-2 md:w-4/6 w-fit shadow-xl shadow-orange-400/20' src="/img/ULep.png" alt="EP" />
        <div className="flex flex-col w-[700px] md:mx-12 mx-0 mb:-mt-12 -mt-2 mb-4">
          <h1 className="text-center font-black md:text-6xl text-2xl">Undefined Landscapes EP <br></br>OUT 31/05</h1>
        </div>

        <div className='flex flex-row gap-4'>
          <button className="btn btn-lg h-fit border-transparent place-items-center bg-[#b98794]">
            <a className='flex flex-row place-items-center gap-4 text-[#686a81]' href="https://music.apple.com/album/undefined-landscapes-ep/1744414032">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="42" height="42" viewBox="0 0 50 50 " fill="#E1D9E2">
                <path d="M37,4H13c-4.962,0-9,4.037-9,9v24c0,4.963,4.038,9,9,9h24c4.962,0,9-4.037,9-9V13C46,8.037,41.962,4,37,4z M35,27v4v0.021	h-0.002C34.986,33.768,32.749,36,30,36h-0.5c-0.987,0-1.933-0.42-2.596-1.152c-0.662-0.731-0.985-1.718-0.887-2.705	C26.195,30.38,27.787,29,29.643,29H31c1.103,0,2-0.897,2-2v-9.795l-12,2.25V30v4c0,2.757-2.243,5-5,5h-0.5	c-0.987,0-1.933-0.42-2.596-1.152c-0.662-0.731-0.985-1.718-0.887-2.705C12.195,33.38,13.787,32,15.643,32H17c1.103,0,2-0.897,2-2	V15.353c0-0.963,0.687-1.79,1.633-1.966l12.591-2.36c0.439-0.083,0.891,0.033,1.234,0.319C34.803,11.632,35,12.053,35,12.5V27z"></path>
              </svg> Pre Add</a>
          </button>
          <button className="btn btn-lg h-fit border-transparent place-items-center bg-[#b98794]">
            <a className='flex flex-row place-items-center gap-4 text-[#686a81]' href="https://music.apple.com/album/undefined-landscapes-ep/1744414032">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="42" height="42" fill="#E1D9E2" >
                <path d="M15,3C8.373,3,3,8.373,3,15s5.373,12,12,12s12-5.373,12-12S21.627,3,15,3z M17.333,18.774H8.578l4.089-7.547h8.755L17.333,18.774z" fillRule="evenodd" clipRule="evenodd" />
              </svg> Pre Order</a>
          </button>
        </div>

        <iframe className="hidden rounded-[15px] w-10/12 md:w-[500px] h-[320px] my-2 mx-auto md:-mb-16" allow="autoplay" src="https://bandcamp.com/EmbeddedPlayer/album=2256355435/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"></iframe>

        <div className='flex md:flex-row flex-col place-items-center place-content-evenly gap-4 w-10/12 md:w-4/6 my-8'>

          <div className='flex flex-col place-items-center w-[500px] '>
            <img className=' rounded-3xl md:w-[200px] w-[250px] -mb-8 md:mb-0' src="/img/mida.jpg" alt="mida" />
            <h1 className="text-center w-[300px] font-black md:text-4xl text-2xl">Mida <br></br> single n*2</h1>
            <Link
              appleL={'https://music.apple.com/album/mida/1744570531?i=1744570533'}
              spotiL={'https://open.spotify.com/album/3ItY4g99iZrgBIqBpiLmkX'}
              bandcL={'https://lcrt.bandcamp.com/track/mida'}>
            </Link>
          </div>
          <div className='flex flex-col place-items-center w-[500px] '>
            <img className=' rounded-3xl md:w-[200px] w-[250px] -mb-8 md:mb-0' src="/img/ul.jpg" alt=" UL" />
            <h1 className="text-center w-[300px] font-black md:text-4xl text-2xl">Undefined Landscapes <br></br> single n*1</h1>
            <Link
              appleL={'https://music.apple.com/album/undefined-landscapes-single/1740904572'}
              spotiL={'https://open.spotify.com/track/0caMaRhtJarY364EOZJHlZ?si=b430a3777e14497e'}
              bandcL={'https://lcrt.bandcamp.com/track/undefined-landscapes'}>
            </Link>
          </div>
        </div>

      </div>

      <div className="md:flex hidden flex-row w-10/12 place-content-center mx-auto md:-mt-6 -mt-4 mb-8" >
        <iframe height="400" className=" rounded-[15px] md:w-64 md:h-64 w-40 h-40 -m-4 -my-4" src="https://player.vimeo.com/video/935037494?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
        <iframe height="400" className=" rounded-[15px] md:w-64 md:h-64 w-40 h-40 -m-6 mt-8" src="https://player.vimeo.com/video/935029672?h=03947efb64&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
        <iframe height="400" className=" rounded-[15px] md:w-64 md:h-64 w-40 h-40 -m-4 -my-4" src="https://player.vimeo.com/video/935031122?h=452d1d40a1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
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