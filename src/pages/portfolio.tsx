import type { NextPage } from "next";
import Head from "next/head";
import { PortfolioView } from "../views";

const Portfolio: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>LCRT - Portfolio</title>
        <meta
          name="description"
          content="Nico Lacerenza Visual Sound Artist LCRT XYZ SOUNDART PERFORMANCE ART AI GENERATED VIDEO"
        />
      </Head>
      <PortfolioView />
    </div>
  );
};

export default Portfolio;
