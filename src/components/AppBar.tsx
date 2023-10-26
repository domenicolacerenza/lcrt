import Link from "next/link";
import React, { useState } from "react";
import NavElement from './nav-element';

export const AppBar: React.FC = () => {

  return (
    <div>
      {/* NavBar / Header */}
      <div className="navbar flex flex-row h-12">
        <div className="navbar-start">
          <Link href={'/'}><img className='w-32 ml-2 md:ml-6 justify-center' src="/img/LOGO.png" alt='' /> </Link>
        </div>

        <div className="navbar-end">
        <div className="hidden md:inline-flex justify-items gap-6">
          <ul className="top-4 right-4 menu menu-horizontal text-2xl rounded-box bg-base-100 overflow-auto">
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
          className="btn btn-square p-2 border-0 btn-md bg-transparent mx-4 md:hidden">

          <div className="space-y-2.5">
            <div className={`h-0.5 w-8 bg-white`} />
            <div className={`h-0.5 w-8 bg-white`} />
            <div className={`h-0.5 w-8 bg-white`} />
          </div>
        </label>
        </div>
      </div>
    </div>

  );
};
