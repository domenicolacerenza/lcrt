"use client";

import React, { ReactElement, useState } from 'react';
import Modal from '@/components/Modal';

type FolderProps = {
    title: string,
    modalWindow?: ReactElement,
}

export const Folder = ({
    title,
    modalWindow,

}: FolderProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button
                onClick={openModal}
                className="flex items-center justify-center 
                md:w-12 md:h-12 w-10 h-10 rounded-full 
                buttonstyle">
                <span className="md:text-4xl text-2xl leading-none">{title}</span>

            </button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className='max-h-[70vh] lg:max-h-[75vh] '>
                    <h1 className="font-semibold md:text-5xl text-3xl font-mono text-center text-amber-50 md:mb-6 mb-0 py-2">{title}</h1>
                    <div className="max-h-[60vh] lg:max-h-[65vh] overflow-y-auto">
                        <div className="flex flex-wrap mx-auto place-content-center md:gap-8 gap-4 md:mb-4 mb-6 md:p-4 p-2">
                            {modalWindow}
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
