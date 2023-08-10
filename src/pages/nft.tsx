import type { NextPage } from "next";
import Head from "next/head";
import { NftView } from "../views";

const NFT: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Scaffold</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <NftView />
    </div>
  );
};

export default NFT;
