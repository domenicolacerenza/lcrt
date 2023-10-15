import { FC } from 'react';
import Link from "next/link";
import Text from './Text';
import NavElement from './nav-element';
interface Props {
  children: React.ReactNode;
}

export const ContentContainer: React.FC<Props> = ({ children }) => {

  return (
    <div className="flex-1 drawer h-52">
      <input id="my-drawer" type="checkbox" className="grow drawer-toggle" />
      <div className="items-center drawer-content flex justify-between mb-32 md:mb-32">
        {children}
      </div>
      {/* SideBar / Drawer */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay gap-6"></label>

        <ul className="p-4 overflow-y-auto menu w-fit gap-10 sm:flex items-center my-auto text-xl rounded-box bg-base-100">
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
    </div>
  );
};
