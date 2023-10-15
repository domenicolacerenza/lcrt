import { FC } from 'react';

export const HomeView: FC = ({ }) => {
  return (
    <div className='md:hero mx-auto w-3/5'>
      <div className="md:static flex max-h-screen md:max-h-fit flex-wrap mx-auto mt-56 md:mt-0 content-start place-content-center gap-8">

        <link rel="me" href="https://mastodon.social/@nico_lcrt" />
        <h1 className='hidden'>Nico Lacerenza - LCRT</h1>
        <h2 className='hidden'>VOICEFROMTHEVOID VISUAL SOUND ARTIST</h2>
      
          <div className="w-72 h-auto md:w-96">
            <img className='rounded-[15px]' src="/img/XDXDX.jpg" alt="XDXDX" />
          </div>
          <div className="w-72 h-auto md:w-96">
            <img className='rounded-[15px]' src="/img/ab6761670000ecd44113acecee3e7fbae911e540.jpeg" />
          </div>
          <div className="w-72 h-auto md:w-96">
            <img className='rounded-[15px]' src="/img/howl.png" alt="ROBOT" />
          </div>

        <div className='place-content-center mt-0 md:mt-8 mb-20'>
          <p className='mx-auto w-96 md:w-full text-2xl md:text-4xl md:absolute md:bottom-20 md:left-0 text-center '>la-sə-rāt _ Visual/Sound Artist <br />
            Human since MCMXCVIII<br /></p>
        </div>
      </div>
    </div>
  );
};
