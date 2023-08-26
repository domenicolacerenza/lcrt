import { FC } from 'react';
import Link from "next/link";
import dynamic from 'next/dynamic';
import React, { useState } from "react";
import { useAutoConnect } from '../contexts/AutoConnectProvider';
import NetworkSwitcher from './NetworkSwitcher';
import NavElement from './nav-element';

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

export const AppBar: React.FC = () => {
  const { autoConnect, setAutoConnect } = useAutoConnect();
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
      {/* NavBar / Header */}
      <div className="navbar w-full place-content-between">
        <Link href={'/'}><img className='w-40 ml-6' src="/img/LOGO.png"/> </Link>
        <div className="hidden md:inline-flex justify-items gap-6">
          <ul className="absolute top-4 right-4 menu menu-horizontal text-2xl rounded-box bg-base-100 ">
            <li>
              <NavElement
                label="Home"
                href="/"
                navigationStarts={() => setIsNavOpen(false)}
              />
            </li>
            <li>
              <NavElement
                label="Music"
                href="/music"
                navigationStarts={() => setIsNavOpen(false)}
              />
            </li>
            <li>
              <NavElement
                label="NFT"
                href="/nft"
                navigationStarts={() => setIsNavOpen(false)}
              />
            </li>
          </ul>
        </div>
        <label
          htmlFor="my-drawer"
          className="btn-gh items-end justify-between md:hidden mr-12"
          onClick={() => setIsNavOpen(!isNavOpen)}>
          <div className="HAMBURGER-ICON space-y-2.5 ml-5">
            <div className={`h-0.5 w-8 bg-black ${isNavOpen ? 'hidden' : ''}`} />
            <div className={`h-0.5 w-8 bg-black ${isNavOpen ? 'hidden' : ''}`} />
            <div className={`h-0.5 w-8 bg-black ${isNavOpen ? 'hidden' : ''}`} />
          </div>
          <div className={`absolute block h-0.5 w-8 animate-pulse bg-black ${isNavOpen ? "" : "hidden"}`}
            style={{ transform: "rotate(45deg)" }}>
          </div>
          <div className={`absolute block h-0.5 w-8 animate-pulse bg-black ${isNavOpen ? "" : "hidden"}`}
            style={{ transform: "rotate(135deg)" }}>
          </div>
        </label>
      </div>
    </div>

  );
};
