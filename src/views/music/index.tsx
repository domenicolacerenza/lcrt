
import { FC } from "react";
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';
import { SendVersionedTransaction } from '../../components/SendVersionedTransaction';
import Link from "next/link";

export const MusicView: FC = ({ }) => {

  return (
    <div className="flex flex-col"> 
    <div className="carousel carousel-end rounded-box mt-8">
      <div className="w-auto carousel rounded-box">
      <div className="card card-compact w-96 bg-black m-2">
          <iframe src="https://audius.co/embed/track/JRd7ad?flavor=card" width="100%" height="480" allow="encrypted-media"></iframe>
        </div> 
        <div className="card card-compact w-96 bg-black m-2">
          <iframe src="https://audius.co/embed/track/y7GJy8X?flavor=card" width="100%" height="480" allow="encrypted-media"></iframe>
        </div> 
        <div className="card card-compact w-96 bg-black m-2">
          <iframe src="https://audius.co/embed/track/AQ8RKrK?flavor=card" width="100%" height="480" allow="encrypted-media"></iframe>
        </div> 
      </div>      
    </div>
    <Link className="mx-auto" href="https://linktr.ee/lcrt"> <button className="btn btn-primary">STREAM</button>
          </Link>
    </div>
);
};
