import React from 'react';

export default function Hide() {
  return (
<div className=" flex flex-col place-items-center mx-auto">
      <div className="-mb-4">
        <h1 className="text-center font-black text-9xl mt-12 ">XTRM Desire</h1>
        <p className="text-center font-mono text-fuchsia-200 text-6xl -">demo LP/Mixtape</p>
      </div>
      <iframe height="600" className=" rounded-[15px] md:w-2/3 w-4/5" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1714900293%3Fsecret_token%3Ds-fYtRnVnAQUj&color=%2374f775&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />

      <p className="font-thin w-2/3 text-5xl m-8"> digital-emotional, ethereal AI dreaming, magic exploitation, synthetic ego-death, speculations on distorted reality <br></br><br></br>
        This body of work took form this year from the mix mastering of old demos and researching what could be the sound for LCRT.
        
        Each track has its cover art/realm, I'm working on videos and visuals for live and sets using 3d and AI. <br></br><br></br>
        
         </p>

      <div className="flex md:flex-row flex-col place-content-center gap-4 mb-24">
        <img className='rounded-[15px] md:w-1/2 md:h-1/2 ' src="/img/ROBOTS.jpg" alt="ROBOTS" />
        <img className='rounded-[15px] w-1/2 h-1/2' src="/img/ENV.jpg" alt="ENV" />
      </div>
    </div>

  );
}