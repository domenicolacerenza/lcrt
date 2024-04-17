import React from 'react';
import Image from "next/image";

export default function Hide() {
  return (
    <div className=" flex flex-col place-items-center w-11/12">
      <div className=" flex mx-auto -my-24 md:mt-8 mt-16 -mb-48 ">
        <Image
          src="/img/logoo.svg"
          alt="_Logo0"
          width={150}
          height={35}
          priority
        />
      </div>
      <div className=" mx-12">
        <h1 className="text-center font-black md:text-9xl text-6xl mt-16 ">Undefined Landscapes</h1>
        <p className="text-center font-mono text-fuchsia-200 text-6xl -">EP</p>
      </div>

      <div className='flex md:flex-row flex-col place-items-center justify-center w-10/12 '>
        <iframe className="rounded-[15px] md:w-4/6 w-[350px] md:h-[500px] h-[350px]"  allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1801508710%3Fsecret_token%3Ds-HZ2pbKH7Azr&color=%23c0b59d&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true&visual=true&show_artwork=false"></iframe>
        <p className=" font-normal md:w-3/6 w-full h-fit md:text-4xl text-md m-8">
          digital-emotional, ethereal AI dreaming, magic exploitation, synthetic ego-death, speculations on distorted reality <br></br><br></br>
          jumping portals through morphing landscapes, #CA9B84 colored sunlight, extremely detailed, HDR, 4k UHD, analog photography, grainy textured <br></br><br></br>
        </p>
      </div>

      <div className='flex place-items-center justify-center w-screen md:my-12 -my-4 -mt-4'>
        <p className=" font-normal w-7/12 h-fit md:text-4xl text-md m-6 mr-12">
          Hi, I'm Nico, a visual sound artist from Italy. All my research is based on a visceral connection between image and sound generation as a meditative tool.<br></br>
          I'm building a common universe, an amorphously generated landscape in which my musical works will take visual form.<br></br><br></br>
          The Undefined Landscapes EP is the first chapter of this exploration, the first single is Undefined Landscapes (OUT 19/04/2024), followed by Mida (TBD).<br></br>
          For this and future projects, I'm currently working on AI video generation for a series of short visual films to be used in live performances.<br></br><br></br>
          In order for these releases to reach the right audience, I am looking for management and a distributor/label to work with.<br></br>
        </p>
        <div className="flex flex-col gap-8 place-content-center justify-items-end md:ml-6 -ml-12">
          <div className=" lg:w-40 md:w-32 w-24 h-auto">
            <img className='rounded-[15px] shadow-xl shadow-orange-400/60' src="/img/vanity/land2.webp" alt=" z3" />
          </div>
          <div className="lg:w-40 md:w-32 w-24 h-auto">
            <img className='rounded-[15px] shadow-xl shadow-orange-400/60' src="/img/vanity/land1.webp" />
          </div>
          <div className="lg:w-40 md:w-32 w-24 h-auto">
            <img className='rounded-[15px] shadow-xl shadow-orange-400/60' src="/img/vanity/land3.webp" alt="x2" />
          </div>
        </div>
      </div>
      <div className="md:flex hidden flex-row w-fit place-content-center mx-auto md:-mt-10 -mt-4 mb-4" >
        <iframe height="600" className=" rounded-[15px] md:w-64 md:h-64 lg:w-96 lg:h-96 w-40 h-40 -m-4 -my-4" src="https://player.vimeo.com/video/935037494?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
        <iframe height="600" className=" rounded-[15px] md:w-64 md:h-64 lg:w-96 lg:h-96 w-40 h-40 -m-6 mt-8" src="https://player.vimeo.com/video/935029672?h=03947efb64&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
        <iframe height="600" className=" rounded-[15px] md:w-64 md:h-64 lg:w-96 lg:h-96 w-40 h-40 -m-4 -my-4" src="https://player.vimeo.com/video/935031122?h=452d1d40a1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
      </div>
    </div>

  );
}