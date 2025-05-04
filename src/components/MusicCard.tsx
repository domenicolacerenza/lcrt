import { Link } from '@/components/Link';
import { ReactElement } from 'react';

type MusicCardProps = {
    title: string,
    subtitle: String,
    imgSrc?: string,
    appleL: string,
    spotiL: string,
    bandcL: string,
    soundL: string,
}

export const MusicCard = ({
    title,
    subtitle,
    imgSrc,
    appleL,
    spotiL,
    bandcL,
    soundL,
}: MusicCardProps) => {
    return (

        <div className=" w-[65vw] md:w-[25vw] rounded-xl overflow-hidden shadow-lg bg-black/50">
            <div className="relative">

                <div className='flex md:flex-row'>
                    <img className="md:w-52 md:h-52 w-20 h-20 rounded-xl object-cover " src={imgSrc} alt={title} />

                    <div className="flex place-content-center md:place-content-start flex-col md:m-6 m-4 ">
                        <div className="md:text-2xl text-sm md:mb-2 mb-0">{title}</div>
                        <p className="text-base md:flex hidden font-mono">
                            {subtitle}
                        </p>
                    </div>
                </div>

                <div className="md:absolute flex place-content-center bottom-0 right-2 md:m-4 mx-4 my-2">

                    <Link appleL={appleL} spotiL={spotiL} bandcL={bandcL} soundL={soundL}></Link>

                </div>
            </div>
        </div>

    );
};
