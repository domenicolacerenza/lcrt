import { PortfolioCard } from "../PortfolioCard";
import { Link } from "@/components/Link";
import Image from "next/image";

const Latest = () => {

    return (
        <div className="flex flex-col place-items-center w-11/12">
            <div className='w-full flex flex-col place-items-center mx-auto'>

                
                    <h1 className="text-center w-full font-black text-amber-50 md:text-4xl text-2xl mb-6">Undefined Landscapes EP</h1>
                    <img className="flex md:hidden w-28 h-28 rounded-xl" src="/img/cover/ulep.jpg" alt="ulep" />
               

                <div className=" w-[55vw] md:w-[60vw] rounded-2xl overflow-hidden shadow-lg bg-black/50">
                    <div className="relative">
                        <div className=" text-center left-8 top-2 md:mt-4 mt-2 m-2">
                            <div className="lg:text-2xl text-base mt-4">◎turn anything into gold◎</div>
                            <div className="lg:text-2xl text-xs mb-4">#CA9B84 sunlight, HDR, 4k UHD</div>
                        </div>

                        <div className="flex place-content-center right-4 md:m-4 mx-4 my-2">
                            <Link
                                appleL="1744414032"
                                spotiL="4kU060X2xB1YVLNWKUHuP0"
                                bandcL="album/undefined-landscapes"
                                soundL="sets/undefined-landscapes" />
                        </div>

                        <div className="flex place-items-center flex-col md:mb-6 mb-2 ">


                            <div className="md:flex hidden place-items-center py-2">
                                <iframe width="450px" height="320px" src="https://bandcamp.com/EmbeddedPlayer/album=2256355435/size=large/bgcol=ffffff/linkcol=CCA1A0/artwork=small/transparent=true/" loading="lazy" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="text-center w-full font-black text-amber-50 md:text-2xl text-sm mt-2">New music soon ... <br></br> ⇘ leave me your email here ⇙  </div>

            </div>
        </div>
    )
}
export default Latest;