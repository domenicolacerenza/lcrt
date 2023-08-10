
import { FC } from "react";
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';
import { SendVersionedTransaction } from '../../components/SendVersionedTransaction';
import Link from "next/link";

export const NftView: FC = ({ }) => {

  return (
    <div className="carousel carousel-end rounded-box mt-8">
        <div className="w-auto carousel rounded-box">

        <div className="card card-compact w-96 bg-black shadow-xl m-2">
        <figure><img src="/img/00004.jpg" alt="NFT" /></figure>
        <div className="card-body">
          <h2 className="card-title">GLASS MASK #01</h2>
          <p>AI GENERATED MASK</p>
          <div className="card-actions justify-end bottom-0">
            <Link href="https://exchange.art/editions/CDnyXPZU8vdme4kVfisBQB1sZvgJHnfT2Vteyob8X7Nf"> <button className="btn btn-primary">NFT ON EXCHANGE.ART</button>
          </Link>
          </div>
        </div>
      </div>

      <div className="card card-compact w-96 bg-black shadow-xl m-2">
        <figure><img src="/img/00005.png" alt="NFT" /></figure>
        <div className="card-body">
          <h2 className="card-title">MSMS SLIDE #01 </h2>
          <p>THE ORIGINAL PLASTIC SLIDE - MSMS UL7RA</p>
          <div className="card-actions justify-end bottom-0">
            <Link href="https://exchange.art/editions/DF8UTvXTMn8nWwX1xyZjEXCZtsLg1xnPc5ST81vgyGAP"> <button className="btn btn-primary">NFT ON EXCHANGE.ART</button>
         </Link> </div>
        </div>
      </div>
      </div>      
    </div>
  );
};
