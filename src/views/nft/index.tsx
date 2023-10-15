
import { FC } from "react";
import Link from "next/link";
import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { Card } from "components/Card";

export const NftView: FC = ({ }) => {

  return (
    <div className='md:hero mx-auto'>
       

      <div className="md:static flex max-h-screen md:max-h-fit flex-wrap mx-auto mt-56 md:mt-0 content-start place-content-center gap-8">
       
        <Card id={1} title={"GLASS MASK #01"} subtitle={"AI GENERATED MASK"} content={""} modalContent={<div></div>} modalFrameSrc="" modalWindow={<br></br>}
          imgSrc={"/img/00004.jpg"}> 
        </Card>

        <Card id={2} title={"MSMS SLIDE #01"} subtitle={"THE ORIGINAL PLASTIC SLIDE - MSMS UL7RA"} content={""} modalContent={<br></br>} modalFrameSrc="" modalWindow={<br></br>}
          imgSrc={"/img/00005.png"}>
        </Card>

        <Card title={"HOWL horse"} content={"3D SCULPTURE FOR - Al Chiar di Luna (HOWL)"}
          imgSrc="/img/howl.png" id={3} subtitle={"Classic & Green"}
          modalWindow={
            <div className="carousel rounded-box content-start place-content-center w-fit h-96 max-w-xl min-w-full">
              <div className="carousel-item">
                <Spline className='rounded-[15px] w-96' scene="https://prod.spline.design/PBVV-Y8MGl0Fb-gN/scene.splinecode" />
              </div>
              <div className="carousel-item">
                <Spline className='rounded-[15px] w-f' scene="https://prod.spline.design/we0nX6wiLvbs4lLy/scene.splinecode" />
              </div>
            </div>}
        ></Card>

        <div className=" md:absolute md:bottom-20 md:left-0 mx-auto md:w-full text-center">
          <Link  href="https://exchange.art/lcrt"> <button className="btn btn-outline btn-warning">NFT ON EXCHANGE.ART</button>
          </Link>
        </div>

      </div>
    </div>
  );
};
