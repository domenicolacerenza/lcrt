import { Card } from "@/components/Card";
import { Folder } from "@/components/Folder";
import { Link } from '@/components/Link';
{/*import Link from "next/link";*/ }
import Image from "next/image";


const Menu = () => {

  return (
    <div className="fixed bottom-6 flex flex-row gap-6">

      <Folder id={1} title={"Music"} mLink={"on"}
        modalWindow={
          <>
            <div className="flex flex-wrap mx-auto place-content-center md:gap-6 gap-4 mb-4">

              <Card id={11} title={"Undefined Landscapes EP"} subtitle={""} content={""}
                appleL={"https://music.apple.com/album/undefined-landscapes-ep/1744414032"} spotiL={"spotify:album:4kU060X2xB1YVLNWKUHuP0"} bandcL={"https://lcrt.bandcamp.com/album/undefined-landscapes"}
                modalFrameSrc="" soundL={""} />
              <Card id={10} title={"Mida - Single"} subtitle={"◎turn anything into gold◎"} content={""}
                appleL={'https://music.apple.com/album/mida/1744570531?i=1744570533'}
                spotiL={'https://open.spotify.com/album/3ItY4g99iZrgBIqBpiLmkX'}
                bandcL={'https://lcrt.bandcamp.com/track/mida'} modalFrameSrc="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1813655748%3Fsecret_token%3Ds-Mj0sKznYiBz&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" soundL={""} />
              <Card id={9} title={"Undefined Landscapes - Single"} subtitle={"portal journey begins ◎"} content={""}
                modalFrameSrc="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1803082323%3Fsecret_token%3Ds-84ydPdfcpdO&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=true&buying=false"
                appleL={"https://geo.music.apple.com/album/1740904572?i=1740904576"} spotiL={"https://open.spotify.com/track/0caMaRhtJarY364EOZJHlZ?si=b430a3777e14497e"} bandcL={"https://lcrt.bandcamp.com/track/undefined-landscapes"} soundL={""}></Card>
              <Card id={8} title={"dirty - Single"} subtitle={"27/10/2023"} content={""} appleL={"https://music.apple.com/it/album/dirty-single/1713022032?l=en-GB"}
                spotiL={"https://open.spotify.com/album/3GElbDOVRBT4FszU9ylKpe?si=wd2KoDzgTVOKQAnM2JtmQA"} bandcL={"https://lcrt.bandcamp.com/album/dirty"}
                modalFrameSrc={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1711827915&color=%235c6c7c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"} soundL={""} />
              <Card id={7} title={"soundcloud demo"} subtitle={"demos"}
                modalContent={
                  <div className=" flex flex-col w-full place-items-center mx-auto">
                    <Link appleL={""} spotiL={""} bandcL={"https://lcrt.bandcamp.com/track/look-at-u"} soundL={"https://soundcloud.com/lcrt/look-at-u"}></Link>
                    <h1 className="text-center text-xl">(LOOK AT U) ✧⎋ </h1>
                    <Link appleL={""} spotiL={""} bandcL={""} soundL={"https://soundcloud.com/lcrt/multiband-dreamfusion"}></Link>
                    <h1 className="text-center text-xl">MULTIBAND DREAM-FUSION </h1>
                  </div>
                }
                modalFrameSrc={""}
                content={""} appleL={""} spotiL={""} bandcL={""} soundL={""} />
              <Card id={6} title={"messy love - Single"} subtitle={"09/06/2023"}
                modalFrameSrc={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1529117974&color=%23af7ad5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
                appleL="https://geo.music.apple.com/it/album/_/1690865943?app=music&at=1000lHKX&ct=linktree_http&i=1690865944&itscg=30200&itsct=lt_m&ls=1&mt=1"
                spotiL="https://open.spotify.com/track/7mRefub1LqNiUZCQ8WCtxu?utm_medium=share&utm_source=lcrtxyz" bandcL="https://lcrt.bandcamp.com/track/messy-love" content={""} soundL={""} />
              <Card id={5} title={"Al Chiar Di Luna (HOWL) - Single"} subtitle={"26/03/2023"}
                modalFrameSrc={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1522753342&color=%233e3d5e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
                appleL="https://music.apple.com/it/album/al-chiar-di-luna-howl/1688374356?at=1000lHKX&ct=linktree_http&i=1688374357&itscg=30200&itsct=lt_m"
                spotiL="https://open.spotify.com/album/5gRiVXegJtfSPqWLKu5hQw?si=DJmzIpwsRPqsC5OQpFCXSA&utm_medium=share&utm_source=lcrtxyz" bandcL="https://lcrt.bandcamp.com/track/al-chiar-di-luna-howl" content={""} soundL={""} />
              <Card id={4} title={"DESTINO - Single"} subtitle={"06/10/2022"}
                modalFrameSrc={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1357501474&color=%233e3d5e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
                appleL="https://music.apple.com/it/album/destino-single/1685015996?at=1000lHKX&ct=linktree_http&itscg=30200&itsct=lt_m&l=en"
                spotiL="https://open.spotify.com/album/1n7NzUBDfyngN4rGhFwJwK?si=qVXrvyS3TeK7LS0Gcrlz8g&utm_medium=share&utm_source=lcrtxyz" bandcL="https://lcrt.bandcamp.com/track/destino" content={""} soundL={""} />
              <Card id={3} title={"Fuck U 2 - Single"} subtitle={"06/09/2020"}
                modalFrameSrc={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/924565816&color=%233e3d5e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
                appleL="https://geo.music.apple.com/it/album/_/1685027558?app=music&at=1000lHKX&ct=linktree_http&i=1685027559&itscg=30200&itsct=lt_m&ls=1&mt=1"
                spotiL="https://open.spotify.com/track/327Ku7AXBjLc07mX6aZ6ii?utm_medium=share&utm_source=lcrtxyz" bandcL="https://lcrt.bandcamp.com/track/fuck-u-2" content={""} soundL={""} />
              <Card id={2} title={"untitled folder.zip - EP"} subtitle={"27/09/2019"}
                modalFrameSrc={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/860109395&color=%233e3d5e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
                appleL="https://music.apple.com/it/album/untitled-folder-single/1481593376?at=1000lHKX&ct=linktree_http&itscg=30200&itsct=lt_m"
                spotiL="https://open.spotify.com/album/6Jn6PMdFKzJOll6mQ7qjmH?utm_medium=share&utm_source=lcrtxyz" bandcL="https://lcrt.bandcamp.com/album/untiled-folder-zip" content={""} soundL={""} />
              <Card id={1} title={"Battle - Single"} subtitle={"01/02/2019"}
                modalFrameSrc={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/568196121&color=%233e3d5e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
                appleL="https://geo.music.apple.com/it/album/_/1671028060?app=music&at=1000lHKX&ct=linktree_http&i=1671028061&itscg=30200&itsct=lt_m&ls=1&mt=1"
                spotiL="https://open.spotify.com/track/5Bg9cWqbkpTTY20V8pms5X?utm_medium=share&utm_source=lcrtxyz" bandcL="https://lcrt.bandcamp.com/track/battle" content={""} soundL={""} />
            </div>
          </>

        }></Folder>

      <Folder title={"⎋"} mLink={""} modalWindow={<>
        <div className=" md:hidden flex mx-auto rounded-[18px] mb-24 w-fit ">
          <img className='rounded-[15px] -mt-16' src="/img/deepcover.png" alt=" cover" />
        </div>
        <div className=" flex flex-col place-items-center">
          <h1 className="relative flex text-center font-bold md:text-8xl text-4xl md:-mt-20 -mt-32 ">DEEP DIVE ⎋ PLAYLIST</h1>
          <div className=" hidden md:flex-row md:flex flex-col md:gap-4 gap-0 place-items-center -mb-20">
            <iframe className='rounded-[24px] mb-12 -mt-16' allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              width="300" height="400" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/it/playlist/deep-dive/pl.u-aeDZczXmAxg?l=en-GB"></iframe>

            <div className=" hidden md:flex md:mx-auto mb-24 -mx-24">
              <Image
                src="/img/deepflag.gif"
                alt="_Logo0"
                width={384}
                height={384}
                unoptimized
              /></div>
            <iframe className=" rounded-[24px] mb-12 -mt-16" src="https://open.spotify.com/embed/playlist/6MONuAr7qBCOiJq64OWwSM?utm_source=generator"
              width="300" height="400" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          </div>

          <h1 className="relative flex text-center font-bold md:text-8xl text-2xl md:-mt-12">Waveform ◎ Refracted</h1>
          <div className="flex flex-row gap-24 place-items-center -mb-4 ">
            <button className="btn btn-md btn-ghost bg-transparent btn-circle">
              <a href={"https://music.apple.com/it/playlist/deep-dive/pl.u-aeDZczXmAxg?l=en-GB"}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50 " fill="#E1D9E2">
                  <path d="M37,4H13c-4.962,0-9,4.037-9,9v24c0,4.963,4.038,9,9,9h24c4.962,0,9-4.037,9-9V13C46,8.037,41.962,4,37,4z M35,27v4v0.021	h-0.002C34.986,33.768,32.749,36,30,36h-0.5c-0.987,0-1.933-0.42-2.596-1.152c-0.662-0.731-0.985-1.718-0.887-2.705	C26.195,30.38,27.787,29,29.643,29H31c1.103,0,2-0.897,2-2v-9.795l-12,2.25V30v4c0,2.757-2.243,5-5,5h-0.5	c-0.987,0-1.933-0.42-2.596-1.152c-0.662-0.731-0.985-1.718-0.887-2.705C12.195,33.38,13.787,32,15.643,32H17c1.103,0,2-0.897,2-2	V15.353c0-0.963,0.687-1.79,1.633-1.966l12.591-2.36c0.439-0.083,0.891,0.033,1.234,0.319C34.803,11.632,35,12.053,35,12.5V27z"></path>
                </svg>
              </a>
            </button>
            <button className="btn btn-md btn-ghost bg-transparent btn-circle">
              <a href={"https://open.spotify.com/playlist/6MONuAr7qBCOiJq64OWwSM?si=1a01998c49ee4eb5"}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50 " fill="#E1D9E2">
                  <path d="M25.009,1.982C12.322,1.982,2,12.304,2,24.991S12.322,48,25.009,48s23.009-10.321,23.009-23.009S37.696,1.982,25.009,1.982z M34.748,35.333c-0.289,0.434-0.765,0.668-1.25,0.668c-0.286,0-0.575-0.081-0.831-0.252C30.194,34.1,26,33,22.5,33.001 c-3.714,0.002-6.498,0.914-6.526,0.923c-0.784,0.266-1.635-0.162-1.897-0.948s0.163-1.636,0.949-1.897 c0.132-0.044,3.279-1.075,7.474-1.077C26,30,30.868,30.944,34.332,33.253C35.022,33.713,35.208,34.644,34.748,35.333z M37.74,29.193 c-0.325,0.522-0.886,0.809-1.459,0.809c-0.31,0-0.624-0.083-0.906-0.26c-4.484-2.794-9.092-3.385-13.062-3.35 c-4.482,0.04-8.066,0.895-8.127,0.913c-0.907,0.258-1.861-0.272-2.12-1.183c-0.259-0.913,0.272-1.862,1.184-2.12 c0.277-0.079,3.854-0.959,8.751-1c4.465-0.037,10.029,0.61,15.191,3.826C37.995,27.328,38.242,28.388,37.74,29.193z M40.725,22.013 C40.352,22.647,39.684,23,38.998,23c-0.344,0-0.692-0.089-1.011-0.275c-5.226-3.068-11.58-3.719-15.99-3.725 c-0.021,0-0.042,0-0.063,0c-5.333,0-9.44,0.938-9.481,0.948c-1.078,0.247-2.151-0.419-2.401-1.495 c-0.25-1.075,0.417-2.149,1.492-2.4C11.729,16.01,16.117,15,21.934,15c0.023,0,0.046,0,0.069,0 c4.905,0.007,12.011,0.753,18.01,4.275C40.965,19.835,41.284,21.061,40.725,22.013z"></path>
                </svg>
              </a>
            </button>
          </div>
        </div>
      </>}></Folder>

      <Folder id={3} title={"Portfolio"} mLink=""
        modalWindow={

          <>
            <h1 className="text-center font-black md:text-4xl text-sm m-4 -my-8">work in progress <br></br> for more info write me an email</h1>
            <div className="flex flex-wrap place-content-center md:gap-6 gap-4 mb-4 md:my-12 md:mx-24 -mx-2 ">

              <Card title={"Danza (from DIARIO SIAMESE)"} id={18} subtitle={"(SoundArt track 2:08 mim, Stereo)"} content={""} appleL={""} spotiL={""} bandcL={""}
                modalContent={<p className="tracking-tight font-light md:text-lg text-xs">AI generated Soundtrack for DIARIO SIAMESE by Eva Macali September 7 - October 25 2023 <br></br>
                  <a className="underline" href={"https://www.su.ac.th/th/news_detail.php?newsID=1378&newsCatID=6"}>PSG Art Gallery at Silpakorn University, Bangkok, Thailand </a>
                  16:9 HD 14:26 minutes </p>} modalFrameSrc="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1648980045&color=%239f7369&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" soundL={""} />
              <Card title={"GINNASTICA 0001 [2022 - 11 - 24]"} id={17} subtitle={"(SoundArt track 17:26 min, Stereo)"}
                modalContent={<p className="tracking-tight font-light md:text-lg text-xs">Recorded experimental live performace, SoundArt | MIDI → KORG volca FM → found Stereo Mixer</p>}
                modalFrameSrc="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1389694534&color=%23522a5d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                content={""} appleL={""} spotiL={""} bandcL={""} soundL={""} />
              <Card title={"ecodrop"} id={16} subtitle={"(3d Sculpture, SoundArt track 11:25 min, Stereo)"}
                modalContent={<p className="tracking-tight font-light md:text-lg text-xs">3d Render and SoundArt track</p>}
                modalFrameSrc="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1141216243&color=%234a9060&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                content={""} appleL={""} spotiL={""} bandcL={""} soundL={""} />
              <Card title={"ALGA"} id={15} subtitle={"(3d Sculpture, SoundArt track, Video 2:22 min, Stereo)"}
                modalContent={<p className="tracking-tight font-light md:text-lg text-xs">Audio Video work, 3d Render and SoundArt track</p>}
                modalFrameSrc="https://player.vimeo.com/video/617201375?h=0c9c227011" content={"undefined"} appleL={""} spotiL={""} bandcL={""} soundL={""} />
              <Card id={14} title={"Human Interaction"} subtitle={"(printable PDF fanzine,SoundArt track, Video 2:20 min, Stereo)"} imgSrc="/img/hi.jpg"
                modalFrameSrc="https://player.vimeo.com/video/477173816?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"
                modalContent={<div className=" place-items-center">
                  <p className="tracking-tight font-light md:text-lg text-xs"> For <a className="underline" href="https://accademiaunidee.it/it/art-summer-school-borders-boundaries/">
                    Art Summer School Borders | Boundaries, Limes | Limen </a> (09/2020), Human Interaction started from a frame sampled video experimentation taking the form of a self printable fanzine</p>
                  <div className="flex justify-center w-full -mb-10">
                    <a href="/docs/rebuilding memories.pdf">
                      <button className="relatice btn btn-outline btn-green">rebuilding memories</button>
                    </a>
                  </div>
                </div>}
                appleL={""} spotiL={""} bandcL={""} content={"Accademia Unidee residency (09/2020)"} soundL={""} />
              <Card id={13} title={"BD LEARNED HOW TO WASH HANDS"} subtitle={"(SoundArt track, 8 min, Stereo)"}
                content={"part of ALL IN ONE | RAVA VAVARA for PILLOW TALK - MATERIA GALLERY"} modalWindow={<div>
                  <div className="carousel w-full">
                    <div id="item4" className="carousel-item w-full h-[150px]">
                      <iframe className="mx-auto w-fit max-w-xl h-[250px] min-w-full"
                        src="https://player.vimeo.com/video/871428484?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture" title="BD LEARNED HOW TO WASH HANDS"></iframe>
                    </div>
                    <div id="item5" className="carousel-item w-full h-[150px]">
                      <iframe className="mx-auto w-fit max-w-xl min-w-full" allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/791362093&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    </div>
                  </div>
                  <div className="flex justify-center w-full py-2 gap-2 -mb-6">
                    <a href="#item4" className="btn btn-xs">1</a>
                    <a href="#item5" className="btn btn-xs">2</a>
                  </div>
                </div>} imgSrc="/img/00001.jpg" modalContent={<p className="tracking-tight font-light md:text-lg text-xs"> created during COVID-19 as part of
                  <a className="underline" href="https://pillowtalkplatform.com/polvere-info-1">THE ALL IN ONE | RAVA VAVARA</a>
                  by Eva Macali for POLVERE Podcast BY PILLOW TALK - MATERIA GALLERY ROME</p>} appleL={""} spotiL={""} bandcL={""} soundL={""} />
              <Card title={"Lèche-vitrine (2019 - on going)"} content={"Live performance/sound art Contact microphone, Ableton (audio VST, loop machine), variable length"}
                imgSrc="/img/00038.jpg" id={12} subtitle={""}
                modalWindow={<div>
                  <div className="carousel w-full ">
                    <div id="item1" className="carousel-item w-full">
                      <iframe className="mx-auto w-fit h-[300px] max-w-xl min-w-full"
                        src="https://player.vimeo.com/video/872283974?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture" title="lèche-vitrines"></iframe>
                    </div>
                    <div id="item2" className="carousel-item w-full">
                      <iframe className="mx-auto w-fit h-[300px] max-w-xl min-w-full"
                        src="https://player-widget.mixcloud.com/widget/iframe/?light=1&hide_artwork=1&feed=%2Fradioraheem_milano%2Frava-v%C3%A0vara-w-eva-macali-e-nico-lacerenza-15-4-19%2F"></iframe>
                    </div>
                  </div>
                  <div className="flex justify-center w-full py-2 gap-2 -mb-6">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                  </div>
                </div>} modalContent={<p className=" tracking-tight font-light md:text-lg text-xs">
                  Sound Art installations for <a className="underline" href="https://archivio.fuorisalone.it/2019/it/eventi/682/The-World-Within-Patrick-Tuttofuoco">The World Within</a> by Patrick Tuttofuoco & Alessandra Pallotta (9/04/2019)<br></br>
                  performed on <a className="underline" href="http://www.evamacali.info/ravavavara/episode11">Rava Vavara EP.11</a> radio show by Eva Macali on Radio Raheem Milano (15/04/2019)<br></br>
                  performed for my <a className="underline" href="https://www.instagram.com/p/B5-3gIlorFN/">Art Class</a> in Accademia di Brera (Milano)
                </p>} appleL={""} spotiL={""} bandcL={""} soundL={""} />
              <Card title={"Rava Vavàra (Labyrinthus)"} id={11} imgSrc={"/img/00039.jpg"}
              subtitle={"(SoundArt track, 7 min, Stereo) <br></br> based on Eva Macali's poem RAVA VAVARA, aired for Rava Vavara EP.6 (1 July 2018,Radio Corax/Halle )"}
              modalContent={<p className="tracking-tight font-light md:text-lg text-xs">
                rework of RAVA VAVARA poem by Eva Macali, aired for <br></br>
                <a className="underline" href="http://www.evamacali.info/ravavavara/episode6">
                  Rava Vavara EP.6
                </a>
                (1 July 2018,Radio Corax/Halle )
              </p>}
              modalFrameSrc="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/465931554&color=%23040404&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              appleL={""} spotiL={""} bandcL={""} content="" soundL={""}  />
            </div>
          </>

        }></Folder></div>)
}
export default Menu;
