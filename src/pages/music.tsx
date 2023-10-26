import type { NextPage } from "next";
import Head from "next/head";
import { MusicView } from "../views";

const Music: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>LCRT - MUSIC</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <MusicView />
    </div>
  );
};

export default Music;
