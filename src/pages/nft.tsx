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
          content="Basic Functionality"
        />
        <script
      type="module"
      src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
    ></script>
      </Head>
      <NftView />
    </div>
  );
};

export default NFT;
