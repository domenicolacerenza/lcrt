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
      <div className="navbar w-full h-auto place-content-between">
        <Link href={'/'}><img className='w-32 ml-2 md:ml-6 justify-center' src="/img/LOGO.png" alt=''/> </Link>
        <div className="hidden md:inline-flex justify-items gap-6">
          <ul className="top-4 right-4 menu menu-horizontal text-2xl rounded-box bg-base-100 ">
            <li>
              <NavElement
                label="Home"
                href="/"
              />
            </li>
            <li>
              <NavElement
                label="Music"
                href="/music"
              />
            </li>
            <li>
              <NavElement
                label="NFT"
                href="/nft"
              />
            </li>
            <li>
              <NavElement
                label="Portfolio"
                href="/portfolio"
              />
            </li>
          </ul>
        </div>
        <label
            htmlFor="my-drawer"
            className="btn btn-square p-4 border-0 btn-lg bg-transparent mx-4 md:hidden">


            <div className="space-y-2.5">
              <div className={`h-0.5 w-8 bg-white`} />
              <div className={`h-0.5 w-8 bg-white`} />
              <div className={`h-0.5 w-8 bg-white`} />
            </div>
          </label>
      </div>
    </div>

  );
};
