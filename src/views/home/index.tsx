export const HomeView = () => {
  return (

    <div className="w-screen max-h-screen p-4 ">
      <link rel="me" href="https://mastodon.social/@nico_lcrt" />

      <div className="flex flex-col" role="main">

        <h1 className='hidden'>Nico Lacerenza - LCRT</h1>
        <h2 className='hidden'>VOICEFROMTHEVOID VISUAL SOUND ARTIST</h2>

        <div className="mx-auto flex flex-col gap-x-8 gap-y-4 md:flex-row mb-8">
          <div className="w-72 h-auto md:w-96">
            <img className='rounded-[15px]' src="/img/XDXDX.jpg" alt="XDXDX" />
          </div>
          <div className="w-72 h-auto md:w-96">
            <img className='rounded-[15px]' src="/img/ab6761670000ecd44113acecee3e7fbae911e540.jpeg" />
          </div>
          <div className="w-72 h-auto md:w-96">
            <img className='rounded-[15px]' src="/img/dirty.png" alt="ROBOT" />
          </div>
        </div>

        <div className="mb-24 md:mb-0">
          <h3 className='mx-auto w-96 md:w-full text-2xl md:text-4xl md:bottom-20 md:left-0 text-center m-8 '>la-sə-rāt _ Visual/Sound Artist <br />
            Human since MCMXCVIII<br /></h3>
        </div>

      </div>
    </div>
  );
};
