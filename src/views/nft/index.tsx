
import { FC } from "react";
import Link from "next/link";
import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { Card } from "components/Card";

export const NftView: FC = ({ }) => {

  return (
    <div className="w-screen max-h-screen p-4 ">

      <div className="flex flex-col" role="main">
        <div className="flex flex-wrap mx-auto place-content-center gap-8 md:m-8 md:mb-40 mb-24">

          <Card id={1} title={"GLASS MASK #01"} subtitle={"AI GENERATED MASK"} content={""}
            imgSrc={"/img/00004.jpg"} appleL={""} spotiL={""} bandcL={""} />

          <Card id={2} title={"MSMS SLIDE #01"} subtitle={"THE ORIGINAL PLASTIC SLIDE - MSMS UL7RA"} content={""}
            imgSrc={"/img/00005.png"} appleL={""} spotiL={""} bandcL={""} />

          <Card title={"HOWL horse"} content={"3D SCULPTURE FOR - Al Chiar di Luna (HOWL)"}
            imgSrc="/img/howl.png" id={3} subtitle={"Classic & Green"}
            modalWindow={
               <div className="flex flex-row mx-auto">
                  <Spline scene="https://prod.spline.design/we0nX6wiLvbs4lLy/scene.splinecode" />
                  <Spline scene="https://prod.spline.design/PBVV-Y8MGl0Fb-gN/scene.splinecode" />
                </div>} 
      appleL={""} spotiL={""} bandcL={""} />

          <div className="md:absolute md:bottom-20 md:left-0 mx-auto md:w-full text-center m-8 md:m-0">
            <Link href="https://exchange.art/lcrt"> <button className="btn btn-outline btn-warning">NFT ON EXCHANGE.ART</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
