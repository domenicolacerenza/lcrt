import type { NextPage } from "next";
import Head from "next/head";
import { NftView } from "../views";

const NFT: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>LCRT - NFT</title>
        <meta
          name="description"
          content="Nico Lacerenza Visual Sound Artist LCRT XYZ NFT AI GENERATED 3D SOUNDART CRYPTO SOLANA EXCHANGE.ART"
        />
      </Head>
      <NftView />
    </div>
  );
};

export default NFT;
