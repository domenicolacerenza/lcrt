import { Card } from "@/components/Card";
import { Folder } from "@/components/Folder";
import Link from "next/link";


const Menu = () => {

  return (
    <div className="fixed bottom-6 flex flex-row gap-12">

      <Folder id={1} title={"Music"} mLink="on"
        modalWindow={
          <><Card id={8} title={"dirty - Single"} subtitle={"27/10/2023"} content={""} appleL={"https://music.apple.com/it/album/dirty-single/1713022032?l=en-GB"}
            spotiL={"https://open.spotify.com/album/3GElbDOVRBT4FszU9ylKpe?si=wd2KoDzgTVOKQAnM2JtmQA"} bandcL={"https://lcrt.bandcamp.com/album/dirty"}
            modalFrameSrc={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1711827915&color=%235c6c7c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"} />
            <Card id={7} title={"(LOOK AT U) ✧⎋ - Single"} subtitle={"23/06/2023"}
              modalFrameSrc={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1548053305&color=%23af7ad5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
              modalContent={<div className="flex flex-row mx-auto w-fit m-2">
                <button className="btn bg-black btn-circle">
                  <a href="https://lcrt.bandcamp.com/track/look-at-u">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" fill="currentColor">
                      <path d="M15,3C8.373,3,3,8.373,3,15s5.373,12,12,12s12-5.373,12-12S21.627,3,15,3z M17.333,18.774H8.578l4.089-7.547h8.755L17.333,18.774z" fillRule="evenodd" clipRule="evenodd" /></svg>
                  </a>
                </button>
              </div>} content={""} appleL={""} spotiL={""} bandcL={"https://lcrt.bandcamp.com/track/look-at-u"} />
            <Card id={6} title={"messy love - Single"} subtitle={"09/06/2023"}
              modalFrameSrc={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1529117974&color=%23af7ad5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
              appleL="https://geo.music.apple.com/it/album/_/1690865943?app=music&at=1000lHKX&ct=linktree_http&i=1690865944&itscg=30200&itsct=lt_m&ls=1&mt=1"
              spotiL="https://open.spotify.com/track/7mRefub1LqNiUZCQ8WCtxu?utm_medium=share&utm_source=lcrtxyz" bandcL="https://lcrt.bandcamp.com/track/messy-love" content={""} />
            <Card id={5} title={"Al Chiar Di Luna (HOWL) - Single"} subtitle={"26/03/2023"}
              modalFrameSrc={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1522753342&color=%233e3d5e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
              appleL="https://music.apple.com/it/album/al-chiar-di-luna-howl/1688374356?at=1000lHKX&ct=linktree_http&i=1688374357&itscg=30200&itsct=lt_m"
              spotiL="https://open.spotify.com/album/5gRiVXegJtfSPqWLKu5hQw?si=DJmzIpwsRPqsC5OQpFCXSA&utm_medium=share&utm_source=lcrtxyz" bandcL="https://lcrt.bandcamp.com/track/al-chiar-di-luna-howl" content={""} />
            <Card id={4} title={"DESTINO - Single"} subtitle={"06/10/2022"}
              modalFrameSrc={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1357501474&color=%233e3d5e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
              appleL="https://music.apple.com/it/album/destino-single/1685015996?at=1000lHKX&ct=linktree_http&itscg=30200&itsct=lt_m&l=en"
              spotiL="https://open.spotify.com/album/1n7NzUBDfyngN4rGhFwJwK?si=qVXrvyS3TeK7LS0Gcrlz8g&utm_medium=share&utm_source=lcrtxyz" bandcL="https://lcrt.bandcamp.com/track/destino" content={""} />
            <Card id={3} title={"Fuck U 2 - Single"} subtitle={"06/09/2020"}
              modalFrameSrc={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/924565816&color=%233e3d5e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
              appleL="https://geo.music.apple.com/it/album/_/1685027558?app=music&at=1000lHKX&ct=linktree_http&i=1685027559&itscg=30200&itsct=lt_m&ls=1&mt=1"
              spotiL="https://open.spotify.com/track/327Ku7AXBjLc07mX6aZ6ii?utm_medium=share&utm_source=lcrtxyz" bandcL="https://lcrt.bandcamp.com/track/fuck-u-2" content={""} />
            <Card id={2} title={"untitled folder.zip - EP"} subtitle={"27/09/2019"}
              modalFrameSrc={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/860109395&color=%233e3d5e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
              appleL="https://music.apple.com/it/album/untitled-folder-single/1481593376?at=1000lHKX&ct=linktree_http&itscg=30200&itsct=lt_m"
              spotiL="https://open.spotify.com/album/6Jn6PMdFKzJOll6mQ7qjmH?utm_medium=share&utm_source=lcrtxyz" bandcL="https://lcrt.bandcamp.com/album/untiled-folder-zip" content={""} />
            <Card id={1} title={"Battle - Single"} subtitle={"01/02/2019"}
              modalFrameSrc={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/568196121&color=%233e3d5e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
              appleL="https://geo.music.apple.com/it/album/_/1671028060?app=music&at=1000lHKX&ct=linktree_http&i=1671028061&itscg=30200&itsct=lt_m&ls=1&mt=1"
              spotiL="https://open.spotify.com/track/5Bg9cWqbkpTTY20V8pms5X?utm_medium=share&utm_source=lcrtxyz" bandcL="https://lcrt.bandcamp.com/track/battle" content={""} /></>
        }></Folder>

      <Folder id={2} title={"Portfolio"} mLink=""
        modalWindow={

          <><Card title={"Danza (from DIARIO SIAMESE)"} id={18} subtitle={"(SoundArt track 2:08 mim, Stereo)"} content={""} appleL={""} spotiL={""} bandcL={""}
            modalContent={<p className=" font-light md:text-lg text-xs">AI generated Soundtrack for DIARIO SIAMESE by Eva Macali <br></br> September 7 - October 25 2023 <br></br>
              <Link className="underline" href={"https://www.su.ac.th/th/news_detail.php?newsID=1378&newsCatID=6"}>PSG Art Gallery at Silpakorn University, Bangkok, Thailand</Link>
              <br></br> 16:9 HD 14:26 minutes </p>} modalFrameSrc="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1648980045&color=%239f7369&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
            <Card title={"GINNASTICA 0001 [2022 - 11 - 24]"} id={17} subtitle={"(SoundArt track 17:26 min, Stereo)"}
              modalContent={<p className=" font-light md:text-lg text-xs">Recorded experimental live performace, SoundArt | MIDI → KORG volca FM → found Stereo Mixer</p>}
              modalFrameSrc="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1389694534&color=%23522a5d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              content={""} appleL={""} spotiL={""} bandcL={""} />
            <Card title={"ecodrop"} id={16} subtitle={"(3d Sculpture, SoundArt track 11:25 min, Stereo)"}
              modalContent={<p className=" font-light md:text-lg text-xs">3d Render and SoundArt track</p>}
              modalFrameSrc="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1141216243&color=%234a9060&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              content={""} appleL={""} spotiL={""} bandcL={""} />
            <Card title={"ALGA"} id={15} subtitle={"(3d Sculpture, SoundArt track, Video 2:22 min, Stereo)"}
              modalContent={<p className=" font-light md:text-lg text-xs">Audio Video work, 3d Render and SoundArt track</p>}
              modalFrameSrc="https://player.vimeo.com/video/617201375?h=0c9c227011" content={"undefined"} appleL={""} spotiL={""} bandcL={""} />
            <Card id={14} title={"Human Interaction"} subtitle={"(printable PDF fanzine,SoundArt track, Video 2:20 min, Stereo)"} imgSrc="/img/hi.jpg"
              modalFrameSrc="https://player.vimeo.com/video/477173816?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"
              modalContent={<div><p className=" font-light md:text-lg text-xs"> For <Link className="underline" href="https://accademiaunidee.it/it/art-summer-school-borders-boundaries/">
                Art Summer School Borders | Boundaries, Limes | Limen </Link> (09/2020), Human Interaction started from a frame sampled video experimentation taking the form of a self printable fanzine</p>
                <div className="flex justify-center w-full"><Link href="/docs/rebuilding memories.pdf"> <button className="btn btn-outline btn-green ">rebuilding memories</button>
                </Link></div></div>}
              appleL={""} spotiL={""} bandcL={""} content={"Accademia Unidee residency (09/2020)"} />
            <Card id={13} title={"BD LEARNED HOW TO WASH HANDS"} subtitle={"(SoundArt track, 8 min, Stereo)"}
              content={"part of ALL IN ONE | RAVA VAVARA for PILLOW TALK - MATERIA GALLERY"} modalWindow={<div>
                <div className="carousel w-full">
                  <div id="item4" className="carousel-item w-full h-48">
                    <iframe className="mx-auto w-fit h-96 max-w-xl min-w-full"
                      src="https://player.vimeo.com/video/871428484?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture" title="BD LEARNED HOW TO WASH HANDS"></iframe>
                  </div>
                  <div id="item5" className="carousel-item w-full">
                    <iframe className="mx-auto w-fit h-96 max-w-xl min-w-full" allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/791362093&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                  </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                  <a href="#item4" className="btn btn-xs">1</a>
                  <a href="#item5" className="btn btn-xs">2</a>
                </div>
              </div>} imgSrc="/img/00001.jpg" modalContent={<p className=" font-light md:text-lg text-xs"> created during COVID-19 as part of
                <Link className="underline" href="https://pillowtalkplatform.com/polvere-info-1">THE ALL IN ONE | RAVA VAVARA</Link>
                by Eva Macali for POLVERE Podcast BY PILLOW TALK - MATERIA GALLERY ROME</p>} appleL={""} spotiL={""} bandcL={""} />
            <Card title={"Lèche-vitrine (2019 - on going)"} content={"Live performance/sound art Contact microphone, Ableton (audio VST, loop machine), variable length"}
              imgSrc="/img/00038.jpg" id={12} subtitle={""}
              modalWindow={<div>
                <div className="carousel w-full">
                  <div id="item1" className="carousel-item w-full">
                    <iframe className="mx-auto w-fit h-48 max-w-xl min-w-full"
                      src="https://player.vimeo.com/video/872283974?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture" title="lèche-vitrines"></iframe>
                  </div>
                  <div id="item2" className="carousel-item w-full">
                    <iframe className="mx-auto w-fit h-48 max-w-xl min-w-full"
                      src="https://player-widget.mixcloud.com/widget/iframe/?light=1&hide_artwork=1&feed=%2Fradioraheem_milano%2Frava-v%C3%A0vara-w-eva-macali-e-nico-lacerenza-15-4-19%2F"></iframe>
                  </div>
                  <div id="item3" className="carousel-item w-full">
                    <iframe className="mx-auto w-fit h-48 max-w-xl min-w-full" allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/605776200&color=%23040404&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                  </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                  <a href="#item1" className="btn btn-xs">1</a>
                  <a href="#item2" className="btn btn-xs">2</a>
                  <a href="#item3" className="btn btn-xs">3</a>
                </div>
              </div>} modalContent={<p className=" font-light md:text-lg text-xs">
                Sound Art installations for <Link className="underline" href="https://archivio.fuorisalone.it/2019/it/eventi/682/The-World-Within-Patrick-Tuttofuoco">The World Within</Link> by Patrick Tuttofuoco & Alessandra Pallotta (9/04/2019)<br></br>
                performed on <Link className="underline" href="http://www.evamacali.info/ravavavara/episode11">Rava Vavara EP.11</Link> radio show by Eva Macali on Radio Raheem Milano (15/04/2019)<br></br>
                performed for my <Link className="underline" href="https://www.instagram.com/p/B5-3gIlorFN/">Art Class</Link> in Accademia di Brera (Milano)
              </p>} appleL={""} spotiL={""} bandcL={""} />
            <Card title={"Rava Vavàra (Labyrinthus)"} id={11} subtitle={"(SoundArt track, 7 min, Stereo)"} imgSrc={"/img/00039.jpg"}
              content={"based on Eva Macali's poem RAVA VAVARA, aired for Rava Vavara EP.6 (1 July 2018,Radio Corax/Halle )"}
              modalContent={<h1 className=" font-light md:text-lg text-xs">
                rework of RAVA VAVARA poem by Eva Macali, aired for <br></br>
                <Link className="underline" href="http://www.evamacali.info/ravavavara/episode6">
                  Rava Vavara EP.6
                </Link>
                (1 July 2018,Radio Corax/Halle )
              </h1>}
              modalFrameSrc="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/465931554&color=%23040404&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              appleL={""} spotiL={""} bandcL={""} /></>

        }></Folder></div>)
}
export default Menu;
