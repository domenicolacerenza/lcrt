
import { FC } from "react";
import Link from "next/link";
import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

export const NftView: FC = ({ }) => {

  return (
    <div className="flex h-auto flex-col place-content-center p-8">

      <Link className="mx-auto mt-4" href="https://exchange.art/lcrt"> <button className="btn btn-outline btn-warning">NFT ON EXCHANGE.ART</button>
      </Link>

      <div className="carousel carousel-center max-w-md lg:max-w-full p-4 space-x-4 bg-transparent gap-4 rounded-box">

        <div className="carousel-item">
          <div className="card card-compact w-96 bg-black shadow-xl">
            <figure><img src="/img/00004.jpg" alt="NFT" /></figure>
            <div className="card-body">
              <h2 className="card-title">GLASS MASK #01</h2>
              <p>AI GENERATED MASK</p>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="card card-compact w-96 bg-black shadow-xl">
            <figure><img src="/img/00005.png" alt="NFT" /></figure>
            <div className="card-body">
              <h2 className="card-title">MSMS SLIDE #01 </h2>
              <p>THE ORIGINAL PLASTIC SLIDE - MSMS UL7RA</p>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel carousel-center max-w-md lg:max-w-full p-4 space-x-4 bg-transparent gap-4 rounded-box mb-12">

        <div className="carousel-item">
          <div className="card card-compact w-96 bg-transparent shadow-xl">
            <Spline scene="https://prod.spline.design/we0nX6wiLvbs4lLy/scene.splinecode" />
            <div className="card-body bg-black">
              <h2 className="card-title">HOWL horse </h2>
              <p>THE HOWL HORSE <br></br>
              LCRT.XYZ</p>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="card card-compact w-96 bg-transparent shadow-xl">
            <Spline scene="https://prod.spline.design/PBVV-Y8MGl0Fb-gN/scene.splinecode" />
            <div className="card-body bg-black">
              <h2 className="card-title">HOWL horse - Green</h2>
              <p>THE HOWL HORSE - GREEN VERSION <br></br>
              LCRT.XYZ</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
