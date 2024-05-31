import Link from "next/link";
import Image from 'next/image'

const Footer = () => {

    return (<>
        <div className=" w-1/5 mx-auto -mb-8 opacity-50 rounded-[200px] place-content-center">
            <Image src="/img/portal.png" width={300} height={20} alt=" portal" />
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
        </div>
    </>)
}
export default Footer;