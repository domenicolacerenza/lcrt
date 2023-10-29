
import { FC, useCallback } from "react";
import Link from "next/link";
import { Card } from "components/Card";

export const PortfolioView: FC = ({ }) => {

    const comportati = useCallback(() => {
        let a = 0
    }, [])

    return (
        <div className="w-screen max-h-screen p-4 ">
            <div className="flex flex-col" role="main">
                <div className="flex flex-wrap mx-auto place-content-center gap-8 md:m-8 md:mb-40 mb-24 ">

                    <Card title={"Danza (from DIARIO SIAMESE)"} id={8} subtitle={"(SoundArt track 2:08 mim, Stereo)"} content={undefined} appleL={""} spotiL={""} bandcL={""}
                        modalContent={<p>AI generated Soundtrack for DIARIO SIAMESE by Eva Macali <br></br> September 7 - October 25 2023 <br></br>
                            <Link className="underline" href={"https://www.su.ac.th/th/news_detail.php?newsID=1378&newsCatID=6"}>PSG Art Gallery at Silpakorn University, Bangkok, Thailand</Link>
                            <br></br> 16:9 HD 14:26 minutes </p>} modalFrameSrc="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1648980045&color=%239f7369&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />

                    <Card title={"GINNASTICA 0001 [2022 - 11 - 24]"} id={7} subtitle={"(SoundArt track 17:26 min, Stereo)"}
                        modalContent={<p>Recorded experimental live performace, SoundArt | MIDI → KORG volca FM → found Stereo Mixer</p>}
                        modalFrameSrc="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1389694534&color=%23522a5d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                        content={undefined} appleL={""} spotiL={""} bandcL={""} />

                    <Card title={"ecodrop"} id={6} subtitle={"(3d Sculpture, SoundArt track 11:25 min, Stereo)"}
                        modalContent={<p>3d Render and SoundArt track</p>}
                        modalFrameSrc="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1141216243&color=%234a9060&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                        content={undefined} appleL={""} spotiL={""} bandcL={""} />

                    <Card title={"ALGA"} id={5} subtitle={"(3d Sculpture, SoundArt track, Video 2:22 min, Stereo)"}
                        modalContent={<p>Audio Video work, 3d Render and SoundArt track</p>}
                        modalFrameSrc="https://player.vimeo.com/video/617201375?h=0c9c227011" content={undefined} appleL={""} spotiL={""} bandcL={""} />

                    <Card id={4} title={"Human Interaction"} subtitle={"(printable PDF fanzine,SoundArt track, Video 2:20 min, Stereo)"} imgSrc="/img/hi.jpg"
                        modalContent={<div><p> For <Link className="underline" href="https://accademiaunidee.it/it/art-summer-school-borders-boundaries/">
                            Art Summer School Borders | Boundaries, Limes | Limen </Link> (09/2020), Human Interaction started from a frame sampled video experimentation taking the form of a self printable fanzine</p>
                            <div className="flex justify-center w-full"><Link href="/docs/rebuilding memories.pdf"> <button className="btn btn-outline btn-green ">rebuilding memories</button>
                            </Link></div></div>}
                        modalWindow={
                            <div><div className="carousel w-full">
                                <div id="item6" className="carousel-item w-full h-full">
                                    <iframe className="mx-auto w-fit h-96 max-w-xl min-w-full"
                                        src="https://player.vimeo.com/video/477173816?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture"></iframe>
                                </div>
                                <div id="item7" className="carousel-item w-fit h-fit">
                                    <img className='rounded-[15px] ' src="/img/human.jpg" alt="Zine" />
                                </div>
                                <div id="item8" className="carousel-item w-fit h-fit">
                                    <img className='rounded-[15px]' src="/img/zine.jpg" alt="fanzine" />
                                </div>
                            </div><div className="flex justify-center w-full py-2 gap-2">
                                    <a href="#item6" className="btn btn-xs">1</a>
                                    <a href="#item7" className="btn btn-xs">2</a>
                                    <a href="#item8" className="btn btn-xs">3</a>
                                </div></div>
                        }
                        appleL={""} spotiL={""} bandcL={""} content={"Accademia Unidee residency (09/2020)"} modalFrameSrc="" />

                    <Card id={3} title={"BD LEARNED HOW TO WASH HANDS"} subtitle={"(SoundArt track, 8 min, Stereo)"}
                        content={"part of ALL IN ONE | RAVA VAVARA for PILLOW TALK - MATERIA GALLERY"} modalWindow={
                            <div>
                                <div className="carousel w-full">
                                    <div id="item4" className="carousel-item w-full">
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
                            </div>} imgSrc="/img/00001.jpg" modalContent={<p> created during COVID-19 as part of
                                <Link className="underline" href="https://pillowtalkplatform.com/polvere-info-1">THE ALL IN ONE | RAVA VAVARA</Link>
                                by Eva Macali for POLVERE Podcast BY PILLOW TALK - MATERIA GALLERY ROME</p>} appleL={""} spotiL={""} bandcL={""} />

                    <Card title={"Lèche-vitrine (2019 - on going)"} content={"Live performance/sound art Contact microphone, Ableton (audio VST, loop machine), variable length"}
                        imgSrc="/img/00038.jpg" id={2} subtitle={""}
                        modalWindow={<div>
                            <div className="carousel w-full">
                                <div id="item1" className="carousel-item w-full">
                                    <iframe className="mx-auto w-fit h-96 max-w-xl min-w-full"
                                        src="https://player.vimeo.com/video/872283974?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture" title="lèche-vitrines"></iframe>
                                </div>
                                <div id="item2" className="carousel-item w-full">
                                    <iframe className="mx-auto w-fit h-96 max-w-xl min-w-full"
                                        src="https://player-widget.mixcloud.com/widget/iframe/?light=1&hide_artwork=1&feed=%2Fradioraheem_milano%2Frava-v%C3%A0vara-w-eva-macali-e-nico-lacerenza-15-4-19%2F"></iframe>
                                </div>
                                <div id="item3" className="carousel-item w-full">
                                    <iframe className="mx-auto w-fit h-96 max-w-xl min-w-full" allow="autoplay"
                                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/605776200&color=%23040404&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                                </div>
                            </div>
                            <div className="flex justify-center w-full py-2 gap-2">
                                <a href="#item1" className="btn btn-xs">1</a>
                                <a href="#item2" className="btn btn-xs">2</a>
                                <a href="#item3" className="btn btn-xs">3</a>
                            </div>
                        </div>} modalContent={<p>
                            Sound Art installations for <Link className="underline" href="https://archivio.fuorisalone.it/2019/it/eventi/682/The-World-Within-Patrick-Tuttofuoco">The World Within</Link> by Patrick Tuttofuoco & Alessandra Pallotta (9/04/2019)<br></br>
                            performed on <Link className="underline" href="http://www.evamacali.info/ravavavara/episode11">Rava Vavara EP.11</Link> radio show by Eva Macali on Radio Raheem Milano (15/04/2019)<br></br>
                            performed for my <Link className="underline" href="https://www.instagram.com/p/B5-3gIlorFN/">Art Class</Link> in Accademia di Brera (Milano)
                        </p>} appleL={""} spotiL={""} bandcL={""} />


                    <Card title={"Rava Vavàra (Labyrinthus)"} id={1} subtitle={"(SoundArt track, 7 min, Stereo)"} imgSrc={"/img/00039.jpg"}
                        content={"based on Eva Macali's poem RAVA VAVARA, aired for Rava Vavara EP.6 (1 July 2018,Radio Corax/Halle )"}
                        modalContent={<p>
                            rework of RAVA VAVARA poem by Eva Macali, aired for
                            <Link className="underline" href="http://www.evamacali.info/ravavavara/episode6">
                                Rava Vavara EP.6
                            </Link>
                            (1 July 2018,Radio Corax/Halle )
                        </p>}
                        modalFrameSrc="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/465931554&color=%23040404&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                        appleL={""} spotiL={""} bandcL={""} />





                </div >
            </div>
        </div >
    );
};
