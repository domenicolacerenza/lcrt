
import { FC } from "react";
import Link from "next/link";

export const MusicView: FC = ({ }) => {

  return (
    <div className="flex h-auto flex-col place-content-center p-8">
      <div className="carousel carousel-center max-w-md lg:max-w-full p-4 space-x-4 bg-transparent gap-4 rounded-box">

        <div className="carousel-item">
          <div className="card card-compact w-96 bg-black">
            <iframe src="https://audius.co/embed/track/JRd7ad?flavor=card" width="100%" height="480" allow="encrypted-media"></iframe>
          </div>
        </div>

        <div className="carousel-item">
          <div className="card card-compact w-96 bg-black">
            <iframe src="https://audius.co/embed/track/y7GJy8X?flavor=card" width="100%" height="480" allow="encrypted-media"></iframe>
          </div>
        </div>

        <div className="carousel-item">
          <div className="card card-compact w-96 bg-black">
            <iframe src="https://audius.co/embed/track/AQ8RKrK?flavor=card" width="100%" height="480" allow="encrypted-media"></iframe>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-2 w-fit mx-auto mt-4">
        <Link className="mx-auto" href="https://linktr.ee/lcrt"> <button className="btn btn-outline btn-error">STREAM</button>
        </Link>

        <Link className="mx-auto" href="/docs/LCRT PORTFOLIO.pdf"> <button className="btn btn-outline btn-green">PORTFOLIO</button>
        </Link>
      </div>
    </div>
  );
};
