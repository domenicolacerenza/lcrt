import Image from "next/image";
import React from 'react';

export default function Home() {
  return (
    <div className=" flex flex-col place-items-center">
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
      <h1 className="md:text-8xl text-5xl font-bold text-center mb:-mt-52 -mt-12 mb:mb-48 -mx-42 mb-8">Undefined Landscapes<br></br>OUT NOW</h1>
      <iframe className="rounded-[15px] md:w-[700px] w-[370px] h-[120px] -mt-8 mb-2" allow="autoplay" src="https://bandcamp.com/EmbeddedPlayer/track=3862983779/size=large/bgcol=ffffff/linkcol=CA9B84/tracklist=false/artwork=small/transparent=true/"></iframe>
      
      <div className="flex flex-row place-items-center gap-16 my-2 mb-4">
        <button className="btn btn-md btn-ghost place-content-center bg-transparent btn-circle my-auto shadow-xl shadow-orange-400/60">
          <a href={"https://music.apple.com/it/album/undefined-landscapes-single/1740904572"}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="42" height="42" viewBox="0 0 50 50 " fill="#E1D9E2">
              <path d="M37,4H13c-4.962,0-9,4.037-9,9v24c0,4.963,4.038,9,9,9h24c4.962,0,9-4.037,9-9V13C46,8.037,41.962,4,37,4z M35,27v4v0.021	h-0.002C34.986,33.768,32.749,36,30,36h-0.5c-0.987,0-1.933-0.42-2.596-1.152c-0.662-0.731-0.985-1.718-0.887-2.705	C26.195,30.38,27.787,29,29.643,29H31c1.103,0,2-0.897,2-2v-9.795l-12,2.25V30v4c0,2.757-2.243,5-5,5h-0.5	c-0.987,0-1.933-0.42-2.596-1.152c-0.662-0.731-0.985-1.718-0.887-2.705C12.195,33.38,13.787,32,15.643,32H17c1.103,0,2-0.897,2-2	V15.353c0-0.963,0.687-1.79,1.633-1.966l12.591-2.36c0.439-0.083,0.891,0.033,1.234,0.319C34.803,11.632,35,12.053,35,12.5V27z"></path>
            </svg>
          </a>
        </button>
        <button className="btn btn-md btn-ghost place-content-center bg-transparent btn-circle my-auto shadow-xl shadow-orange-400/60">
          <a href='https://lcrt.bandcamp.com/track/undefined-landscapes'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="45" height="45" fill="#E1D9E2" >
              <path d="M15,3C8.373,3,3,8.373,3,15s5.373,12,12,12s12-5.373,12-12S21.627,3,15,3z M17.333,18.774H8.578l4.089-7.547h8.755L17.333,18.774z" fillRule="evenodd" clipRule="evenodd" /></svg>
          </a>
        </button>
        <button className="btn btn-md btn-ghost place-content-center bg-transparent btn-circle my-auto shadow-xl shadow-orange-400/60">
          <a href={"https://open.spotify.com/track/0caMaRhtJarY364EOZJHlZ?si=b430a3777e14497e"}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="38" height="38" viewBox="0 0 50 50 " fill="#E1D9E2">
              <path d="M25.009,1.982C12.322,1.982,2,12.304,2,24.991S12.322,48,25.009,48s23.009-10.321,23.009-23.009S37.696,1.982,25.009,1.982z M34.748,35.333c-0.289,0.434-0.765,0.668-1.25,0.668c-0.286,0-0.575-0.081-0.831-0.252C30.194,34.1,26,33,22.5,33.001 c-3.714,0.002-6.498,0.914-6.526,0.923c-0.784,0.266-1.635-0.162-1.897-0.948s0.163-1.636,0.949-1.897 c0.132-0.044,3.279-1.075,7.474-1.077C26,30,30.868,30.944,34.332,33.253C35.022,33.713,35.208,34.644,34.748,35.333z M37.74,29.193 c-0.325,0.522-0.886,0.809-1.459,0.809c-0.31,0-0.624-0.083-0.906-0.26c-4.484-2.794-9.092-3.385-13.062-3.35 c-4.482,0.04-8.066,0.895-8.127,0.913c-0.907,0.258-1.861-0.272-2.12-1.183c-0.259-0.913,0.272-1.862,1.184-2.12 c0.277-0.079,3.854-0.959,8.751-1c4.465-0.037,10.029,0.61,15.191,3.826C37.995,27.328,38.242,28.388,37.74,29.193z M40.725,22.013 C40.352,22.647,39.684,23,38.998,23c-0.344,0-0.692-0.089-1.011-0.275c-5.226-3.068-11.58-3.719-15.99-3.725 c-0.021,0-0.042,0-0.063,0c-5.333,0-9.44,0.938-9.481,0.948c-1.078,0.247-2.151-0.419-2.401-1.495 c-0.25-1.075,0.417-2.149,1.492-2.4C11.729,16.01,16.117,15,21.934,15c0.023,0,0.046,0,0.069,0 c4.905,0.007,12.011,0.753,18.01,4.275C40.965,19.835,41.284,21.061,40.725,22.013z"></path>
            </svg>
          </a>
        </button>
      </div>

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