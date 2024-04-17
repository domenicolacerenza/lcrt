import Link from "next/link";

const Footer = () => {

    return (<>
        <div className=" w-1/3 mx-auto mt-4 -m-12 opacity-50">
            <img className='rounded-[200px]' src="/img/portal.png" alt=" portal" />
        </div>

        <div className="mt-8 w-fit text-[#504241]">
            <div className="flex flex-row place-items-center ">
                <h1 className="md:text-8xl text-6xl font-bold">LCRT</h1>
                <h1 className="text-3xl font-bold">[la-sə-rāt] </h1>
            </div>
            <h2 className="md:text-6xl text-4xl">Nico Lacerenza</h2>
            <h2 className="md:text-4xl text-md font-mono">⚙︎ visual sound.artist <br></br>
                <Link href={"mailto:lcrt.nico@gmail.com"} className="md:text-4xl text-md font-mono underline">☸︎ lcrt.nico@gmail.com</Link></h2>

        </div>
        <div className="flex md:flex-row place-content-center gap-8 md:mx-auto mt-1 mx-8">
            <div className=" w-32 h-auto -mx-6 md:-mx-2">
                <img className='rounded-[15px] shadow-lg' src="/img/vanity/z3.jpg" alt=" z3" />
            </div>
            <div className="w-32 h-auto -mx-12 md:-mx-2 mt-2">
                <img className='rounded-[15px] shadow-lg' src="/img/vanity/ego.jpg" />
            </div>
            <div className="w-32 h-auto -mx-6 md:-mx-2">
                <img className='rounded-[15px] shadow-lg' src="/img/vanity/x2.jpg" alt="x2" />
            </div>
        </div>
    </>)
}
export default Footer;