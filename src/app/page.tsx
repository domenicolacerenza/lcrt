
import Image from "next/image";
import Link from "next/link";
import React from 'react';

export default function Home() {
  return (
    <div className=" flex flex-col place-content-center">
      <div className=" flex mx-auto -my-24 md:-mt-4 mt-12 ">
        <Image
          src="/img/logoo.svg"
          alt="_Logo0"
          width={200}
          height={35}
          priority
        />
      </div>
      <div className=" flex mx-auto mb-24 ">
        <Image
          src="/img/deepflag.gif"
          alt="_Logo0"
          width={384}
          height={384}
          priority
          unoptimized
        />
      </div>
      <div className=" flex flex-col place-items-center mb-12">
        <h1 className="relative flex text-center font-bold md:text-9xl text-8xl md:-mt-26 -mt-40 mb-8">DEEP DIVE ⎋ <br></br> PLAYLIST</h1>
        <div className=" flex md:flex-row flex-col md:gap-10 gap-0  place-items-center">
          <iframe className='rounded-[18px] mb-24 -mt-16' allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" width="350" height="450"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/it/playlist/deep-dive/pl.u-aeDZczXmAxg?l=en-GB"></iframe>
          <iframe className=" rounded-[18px] mb-24 -mt-16" src="https://open.spotify.com/embed/playlist/6MONuAr7qBCOiJq64OWwSM?utm_source=generator"
            width="350" height="450" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <h1 className="relative flex text-center font-bold md:text-9xl text-6xl md:-mt-26 -mt-40 mb-8">Waveform ◎ Refracted</h1>
      </div>

      <div className="flex md:flex-row gap-8 mx-auto -mt-16">
        <div className=" w-44 h-auto md:w-80 -mx-8 md:mx-0 md:mt-0 mt-2">
          <img className='rounded-[15px]' src="/img/vanity/dirty.png" alt=" robot" />
        </div>
        <div className="w-44 h-auto md:w-80 -mx-16 md:mx-0">
          <img className='rounded-[15px]' src="/img/vanity/ab6761670000ecd44113acecee3e7fbae911e540.jpeg" />
        </div>
        <div className="w-44 h-auto md:w-80 -mx-8 md:mx-0 md:mt-0 mt-2">
          <img className='rounded-[15px]' src="/img/vanity/XDXDX.jpg" alt="xdxd" />
        </div>
      </div>

      <div className="mx-auto md:mt-8 mt-12 w-4/6 mb-24">
        <div className="flex flex-row place-items-center">
          <h1 className="md:text-9xl text-6xl font-bold">LCRT</h1>
          <h1 className="text-3xl font-bold">[la-sə-rāt] </h1>
        </div>
        <h2 className="md:text-6xl text-4xl">Nico Lacerenza</h2>
        <h2 className="md:text-4xl text-3xl font-mono">⚙︎ visual sound.artist <br></br>
          <Link href={"mailto:lcrt.nico@gmail.com"} className="md:text-4xl text-3xl font-mono underline">☸︎ lcrt.nico@gmail.com</Link></h2>
      
      </div>
    </div>
  );
}