import Link from "next/link";

const Footer = () => {

    return (<>
        <div className=" w-1/5 mx-auto -mb-8 opacity-50 place-content-center">
            <img className='rounded-[200px] ' src="/img/portal.png" alt=" portal" />
        </div>
        <div className='flex md:flex-row w-4/5 md:w-screen flex-col place-items-center place-content-evenly mb-12'>

            <div className="flex md:flex-row flex-col mt-12 place-content-around mx-auto w-fit text-[#504241]">
                <div className="flex flex-col">
                    <div className="flex flex-row place-items-center ">
                        <h1 className="text-6xl font-bold">LCRT</h1>
                        <h1 className="text-2xl font-bold">[la-sə-rāt] </h1>
                    </div>
                    <h2 className="text-4xl">Nico Lacerenza</h2>
                </div>
                <div className="flex flex-col my-auto place-content-center mx-4">
                    <h2 className="md:text-2xl text-md font-mono">⚙︎ visual sound.artist <br></br>
                        <Link href={"mailto:lcrt.nico@gmail.com"} className="md:text-2xl text-md font-mono underline">☸︎ lcrt.nico@gmail.com</Link></h2>
                </div>
            </div>
            <div className="flex md:hidden place-content-center gap-8 md:mt-12 md:mx-8 mx-0">
                <div className=" w-24 h-auto -mx-6 md:-mx-2">
                    <img className='rounded-[15px] shadow-lg' src="/img/vanity/z3.jpg" alt=" z3" />
                </div>
                <div className="w-24 h-auto -mx-12 md:-mx-2 mt-2">
                    <img className='rounded-[15px] shadow-lg' src="/img/vanity/ego.jpg" />
                </div>
                <div className="w-24 h-auto -mx-6 md:-mx-2">
                    <img className='rounded-[15px] shadow-lg' src="/img/vanity/x2.jpg" alt="x2" />
                </div>
            </div>
        </div>
    </>)
}
export default Footer;