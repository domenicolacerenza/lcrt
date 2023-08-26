import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>LCRT XYZ</title>
        <meta
          name="description"
          content="Nico Lacerenza Visual Sound Artist LCRT XYZ"
        />
        <link rel="apple-touch-icon" href="/howl.png" />

        <link rel="shortcut icon" href="/howl.png" />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
