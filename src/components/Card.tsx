import { Link } from '@/components/Link';
import { ReactElement } from 'react';

type CardProps = {
    id?: number,
    title: string,
    subtitle: String,
    content: String,
    modalFrameSrc?: string,
    modalContent?: ReactElement,
    modalWindow?: ReactElement,
    imgSrc?: string,
    appleL: string,
    spotiL: string,
    bandcL: string,
    soundL: string,
}

export const Card = ({
    id,
    title,
    subtitle,
    content,
    modalWindow,
    modalFrameSrc,
    modalContent,
    imgSrc,
    appleL,
    spotiL,
    bandcL,
    soundL,
}: CardProps) => {
    return (
        <div>
            <input type="checkbox" id={"my_modal_" + String(id)} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-10/12 md:w-full h-2/5 my-8 bg-[#CCA1A0]/65">
                    <h1 className="font-bold md:text-2xl text-xl mb-4 mr-6">{title}</h1>

                    {/*
                        modalWindow ? modalWindow
                            : modalFrameSrc ?
                                <iframe width="100%" height="75%"  src={modalFrameSrc} loading="lazy" />
                                : imgSrc ? <img className=' mx-auto rounded-[15px] src={imgSrc} alt={title}'> </img>: ""
    */}

                    <p className="text-center text-sm font-light m-2">{subtitle} </p>

                    <div className='flex place-items-center mx-auto my-auto -mb-6'>
                        {
                            modalContent ? modalContent
                            : "" }
                        {<Link appleL={appleL} spotiL={spotiL} bandcL={bandcL} soundL={soundL}></Link>}
                    </div>
                    <div className="modal-action ">
                        <label htmlFor={"my_modal_" + String(id)} className="btn btn-md btn-circle btn-ghost fixed right-2 top-0 md:m-4 m-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="currentColor">
                                <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" /></svg>
                        </label>
                    </div>
                </div>
            </div>

            <div className="card md:w-64 w-32 md:h-40 h-24 -m-1 md:m-0 bg-[#CCA1A0]/80">

                <div className="card-body -m-4">
                    <h2 className=" md:text-lg text-sm md:font-medium font-extralight -mt-2 md:mb-4 -mb-24 mr-4">{title}</h2>
                    <p className="md:text-sm hidden md:font-extralight -mb-12">{subtitle} </p>
                </div>

                <div className="card-actions absolute bottom-4 right-4">

                    <label htmlFor={"my_modal_" + String(id)} className="btn btn-sm btn-circle btn-ghost  bg-[#EDD7B0]/20">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor"><path d="M200-200v-200h80v120h120v80H200Zm0-360v-200h200v80H280v120h-80Zm360 360v-80h120v-120h80v200H560Zm120-360v-120H560v-80h200v200h-80Z" /></svg>
                    </label>
                </div>

            </div>
        </div>
    );
};
