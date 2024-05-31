import { ReactElement } from 'react';
import { Link } from '@/components/Link';


type FolderProps = {
    id?: number,
    title: string,
    modalWindow?: ReactElement,
    mLink: string,
}

export const Folder = ({
    id,
    title,
    modalWindow,
    mLink,

}: FolderProps) => {
    return (
        <div>
            <label htmlFor={"fold_" + String(id)} className="btn btn-md btn-ghost backdrop-blur-sm bg-[#EDD7B0]/30 font-medium text-2xl">{title}</label>
            <input type="checkbox" id={"fold_" + String(id)} className="modal-toggle" />
            <div className="modal mx-auto" role="dialog">
                <div className="modal-box w-10/12 lg:w-8/12 max-w-fit md:h-10/12 h-fit mt-28 md:mt-0 backdrop-blur-md bg-[#EDD7B0]/10">
                    
                    <label htmlFor={"fold_" + String(id)} className="btn btn-md btn-circle btn-ghost fixed right-4 top-2 md:m-6 m-4">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="currentColor">
                            <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" /></svg>
                    </label>



                    <h1 className=" font-semibold md:text-6xl text-2xl text-center m-2 mb-8 ">{title}</h1>

                    <div className="flex flex-wrap mx-auto place-content-center md:gap-6 gap-4 mb-12 md:p-8 p-4">{modalWindow}</div>
                    {
                        mLink ?
                            <div className="md:fixed bottom-2 left-0 place-content-center flex h-6 w-full items-end justify-center mt-12 md:mb-0 mb-20">
                                <div className='flex flex-row mx-auto w-fit gap-6 m-4'>
                                    <Link appleL={'https://music.apple.com/it/artist/lcrt/1450918332?l=en-GB'} spotiL={'"https://open.spotify.com/artist/3nDLOg3lpl3Vtbbe5OcLGj?si=mHDd8iCAS7-BnLXy53g78A'}
                                     bandcL={'https://lcrt.bandcamp.com'} soundL={'https://soundcloud.com/lcrt'}></Link>
                                </div>
                            </div>
                            : ""}
                </div>
            </div>
        </div>
    );
};
