import { PortfolioCard } from "@/components/PortfolioCard";

const Stream = () => {

    return (
        <>
            <PortfolioCard
                title={"Danza (from DIARIO SIAMESE)"} subtitle={"(SoundArt track 2:08 mim, Stereo)"}
                imgSrc="/img/cover/danzaeva.jpg"
                modalContent={<p className="tracking-tight font-light md:text-lg text-xs"> Soundtrack for DIARIO SIAMESE by Eva Macali, September 7 - October 25 2023 <br></br>
                  <a className="underline" href={"https://www.su.ac.th/th/news_detail.php?newsID=1378&newsCatID=6"}>PSG Art Gallery at Silpakorn University, Bangkok, Thailand </a>
                  16:9 HD 14:26 minutes </p>} 
                  modalFrameSrc="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1648980045&color=%239f7369&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
            <PortfolioCard
                title={"GINNASTICA 0001 [2022 - 11 - 24]"} subtitle={"(SoundArt track 17:26 min, Stereo)"}
                imgSrc="/img/cover/g1.jpg"
                modalFrameSrc="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1389694534&color=%23522a5d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                />
            <PortfolioCard
                title={"ecodrop"} subtitle={"(3d Sculpture, SoundArt track 11:25 min, Stereo)"}
                imgSrc="/img/cover/ed.jpg"
                modalFrameSrc="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1141216243&color=%234a9060&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                />
            <PortfolioCard
                title={"ALGA"} subtitle={"(3d Sculpture, SoundArt track, Video 2:22 min, Stereo)"} 
                imgSrc="/img/cover/alga.jpg"
                modalFrameSrc={"https://player.vimeo.com/video/617201375?h=0c9c227011"} 
                />
            <PortfolioCard
                title={"Human Interaction"}
                subtitle={"(printable PDF fanzine,SoundArt track, Video 2:20 min, Stereo)"}
                imgSrc="/img/cover/hi.jpg"
                modalFrameSrc="https://player.vimeo.com/video/477173816?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"
                modalContent={
                    <><p className="tracking-tight font-light md:text-lg text-xs"> For <a className="underline" href="https://accademiaunidee.it/it/art-summer-school-borders-boundaries/">
                        Art Summer School Borders | Boundaries, Limes | Limen </a> (09/2020), Human Interaction started from a frame sampled video experimentation taking the form of a self printable fanzine</p>
                        <div className="flex flex-col place-items-center mt-2">

                            <a href="/docs/rebuilding memories.pdf">
                                <button className="px-3 py-2 btn btn-outline text-lg rounded-4xl backdrop-blur-sm bg-[#CCA1A0]/20 font-mono hover:bg-[#CCA1A0]/50 duration-300 ease-in-out">rebuilding memories</button>
                            </a>
                        </div></>
               }
            />
            <PortfolioCard
                title={"BD LEARNED HOW TO WASH HANDS"}
                subtitle={"(SoundArt track, 8 min, Stereo)"}
                imgSrc="/img/cover/BD.jpg"
                modalContent={<p className="tracking-tight font-light md:text-lg text-xs"> created during COVID-19 as part of
                    <a className="underline" href="https://pillowtalkplatform.com/polvere-info-1"> THE ALL IN ONE | RAVA VAVARA </a>
                    by Eva Macali for POLVERE Podcast BY PILLOW TALK - MATERIA GALLERY ROME</p>}
                modalFrameSrc={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/791362093&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
            />
            <PortfolioCard
                title={"Lèche-vitrine"}
                subtitle={"Live performace with contact microphone and Ableton Live "}
                modalFrameSrc="https://player-widget.mixcloud.com/widget/iframe/?light=1&hide_artwork=1&feed=%2Fradioraheem_milano%2Frava-v%C3%A0vara-w-eva-macali-e-nico-lacerenza-15-4-19%2F"
                modalContent={<p className=" tracking-tight font-light md:text-lg text-xs">
                    Sound Art installations for <a className="underline" href="https://archivio.fuorisalone.it/2019/it/eventi/682/The-World-Within-Patrick-Tuttofuoco">The World Within</a> by Patrick Tuttofuoco & Alessandra Pallotta (9/04/2019)<br></br>
                    performed on <a className="underline" href="http://www.evamacali.info/ravavavara/episode11">Rava Vavara EP.11</a> radio show by Eva Macali on Radio Raheem Milano (15/04/2019)<br></br>
                    performed for my <a className="underline" href="https://www.instagram.com/p/B5-3gIlorFN/">Art Class</a> in Accademia di Brera (Milano)
                </p>}
            />
            <PortfolioCard
                title={"Rava Vavàra (Labyrinthus)"}
                subtitle={"Rework of RAVA VAVARA poem by Eva Macali, aired for Rava Vavara EP.6 1 July 2018,Radio Corax/Halle (SoundArt track, 7 min, Stereo)"}
                imgSrc="/img/cover/rv.jpg"
                modalFrameSrc="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/465931554&color=%23040404&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
        </>
    )
}
export default Stream;
