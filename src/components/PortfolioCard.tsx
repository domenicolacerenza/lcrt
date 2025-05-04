import { Link } from '@/components/Link';
import { ReactElement } from 'react';

type PortfolioCardProps = {
    title: string,
    subtitle: String,
    imgSrc?: string,
    modalFrameSrc: string,
    modalContent?: ReactElement,
}

export const PortfolioCard = ({
    title,
    subtitle,
    imgSrc,
    modalFrameSrc,
    modalContent,
}: PortfolioCardProps) => {
    return (

        <div className=" md:w-[75vw] w-[70vw] rounded-xl overflow-hidden shadow-lg bg-black/50">
            <div className="relative">

                <div className='flex md:flex-row'>
                    {
                        imgSrc ?
                            <img className="md:flex hidden w-48 h-48 rounded-xl object-cover " src={imgSrc} alt={title} />
                            : ""}


                    <div className="flex w-full place-content-center md:place-content-start flex-col md:m-4 m-3 ">
                        <div className="md:text-2xl text-lg md:mb-2 mb-2">{title}</div>
                        <div className="text-base">{subtitle}</div>
                        <div className='mt-3 text-sm'>
                            {
                                modalContent ? modalContent
                                    : ""}
                        </div>
                    </div>
                </div>

                <div className="flex place-content-center md:m-4 m-4">
                    {
                        modalFrameSrc ?
                            <iframe width="100%" height="250px" src={modalFrameSrc} loading="lazy" className="rounded-2xl" />
                            : ""}

                </div>
            </div>
        </div>

    );
};
