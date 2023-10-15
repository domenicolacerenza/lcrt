
import { FC } from "react";
import Link from "next/link";
import { Card } from "components/Card";

export const MusicView: FC = ({ }) => {

  return (
    <div className='md:hero mx-auto mb-96'>
      <div className="flex max-h-96 md:max-h-auto flex-wrap mt-96 mx-auto md:mt-8 content-start place-content-center gap-8">

        <Card id={1} title={"Battle - Single"} subtitle={"01/02/2019"}
        modalFrameSrc={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/568196121&color=%233e3d5e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
        appleL="https://geo.music.apple.com/it/album/_/1671028060?app=music&at=1000lHKX&ct=linktree_http&i=1671028061&itscg=30200&itsct=lt_m&ls=1&mt=1"
        spotiL="https://open.spotify.com/track/5Bg9cWqbkpTTY20V8pms5X?utm_medium=share&utm_source=lcrtxyz" bandcL="https://lcrt.bandcamp.com/track/battle" content={""}        />

        <Card id={2} title={"untitled folder.zip - EP"} subtitle={"27/09/2019"}
        modalFrameSrc={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/860109395&color=%233e3d5e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
        appleL="https://music.apple.com/it/album/untitled-folder-single/1481593376?at=1000lHKX&ct=linktree_http&itscg=30200&itsct=lt_m"
        spotiL="https://open.spotify.com/album/6Jn6PMdFKzJOll6mQ7qjmH?utm_medium=share&utm_source=lcrtxyz" bandcL="https://lcrt.bandcamp.com/album/untiled-folder-zip" content={""}        />

        <Card id={3} title={"Fuck U 2 - Single"} subtitle={"06/09/2020"}
        modalFrameSrc={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/924565816&color=%233e3d5e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
        appleL="https://geo.music.apple.com/it/album/_/1685027558?app=music&at=1000lHKX&ct=linktree_http&i=1685027559&itscg=30200&itsct=lt_m&ls=1&mt=1"
        spotiL="https://open.spotify.com/track/327Ku7AXBjLc07mX6aZ6ii?utm_medium=share&utm_source=lcrtxyz" bandcL="https://lcrt.bandcamp.com/track/fuck-u-2" content={undefined}        />

        <Card id={4} title={"DESTINO - Single"} subtitle={"06/10/2022"}
        modalFrameSrc={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1357501474&color=%233e3d5e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
        appleL="https://music.apple.com/it/album/destino-single/1685015996?at=1000lHKX&ct=linktree_http&itscg=30200&itsct=lt_m&l=en"
        spotiL="https://open.spotify.com/album/1n7NzUBDfyngN4rGhFwJwK?si=qVXrvyS3TeK7LS0Gcrlz8g&utm_medium=share&utm_source=lcrtxyz" bandcL="https://lcrt.bandcamp.com/track/destino" content={undefined}        />

        <Card id={5} title={"Al Chiar Di Luna (HOWL) - Single"} subtitle={"26/03/2023"}
        modalFrameSrc={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1522753342&color=%233e3d5e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
        appleL="https://music.apple.com/it/album/al-chiar-di-luna-howl/1688374356?at=1000lHKX&ct=linktree_http&i=1688374357&itscg=30200&itsct=lt_m"
        spotiL="https://open.spotify.com/album/5gRiVXegJtfSPqWLKu5hQw?si=DJmzIpwsRPqsC5OQpFCXSA&utm_medium=share&utm_source=lcrtxyz" bandcL="https://lcrt.bandcamp.com/track/al-chiar-di-luna-howl" content={undefined}        />

        <Card id={6} title={"messy love - Single"} subtitle={"09/06/2023"}
        modalFrameSrc={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1529117974&color=%23af7ad5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
        appleL="https://geo.music.apple.com/it/album/_/1690865943?app=music&at=1000lHKX&ct=linktree_http&i=1690865944&itscg=30200&itsct=lt_m&ls=1&mt=1"
        spotiL="https://open.spotify.com/track/7mRefub1LqNiUZCQ8WCtxu?utm_medium=share&utm_source=lcrtxyz" bandcL="https://lcrt.bandcamp.com/track/messy-love" content={undefined}        />

        <Card id={7} title={"(LOOK AT U) ✧⎋ - Single"} subtitle={"23/06/2023"}
        modalFrameSrc={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1548053305&color=%23af7ad5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
        modalContent={<div className="flex flex-row mx-auto w-fit m-2">
          <button className="btn bg-black btn-circle">
            <a href="https://lcrt.bandcamp.com/track/look-at-u">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" fill="currentColor">
                <path d="M15,3C8.373,3,3,8.373,3,15s5.373,12,12,12s12-5.373,12-12S21.627,3,15,3z M17.333,18.774H8.578l4.089-7.547h8.755L17.333,18.774z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
            </a>
          </button>
        </div>} content={undefined} appleL={""} spotiL={""} bandcL={""}        />

        <Card id={8} title={"MULTIBAND DREAM-FUSION - Single"} subtitle={"20/07/2023"}
        modalFrameSrc={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1570536904&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
        modalContent={<div className="flex flex-row mx-auto w-fit m-2">
          <button className="btn bg-black btn-circle">
            <a href="https://lcrt.bandcamp.com/track/multiband-dream-fusion">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" fill="currentColor">
                <path d="M15,3C8.373,3,3,8.373,3,15s5.373,12,12,12s12-5.373,12-12S21.627,3,15,3z M17.333,18.774H8.578l4.089-7.547h8.755L17.333,18.774z" fill-rule="evenodd" clip-rule="evenodd" /></svg>
            </a>
          </button>
        </div>} content={undefined} appleL={""} spotiL={""} bandcL={""}        />

        <div className="md:absolute md:bottom-20 md:left-0 mx-auto md:w-full text-center ">
          <Link className="mx-auto" href="https://linktr.ee/lcrt"> <button className="btn btn-outline btn-error">STREAM</button>
          </Link>

          <Link className="mx-auto" href="/docs/LCRT PORTFOLIO.pdf"> <button className="btn btn-outline btn-green">PORTFOLIO</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
