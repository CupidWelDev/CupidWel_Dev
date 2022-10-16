import type { NextPage } from "next";
import Header from "../components/Header";
import SEO from "../components/SEO";
import Advertisement from "../components/Advertisement";

const Home: NextPage = () => {
  return (
    <div className="bg-amber-100 w-screen h-screen flex flex-col items-center">
      <Header />
      <SEO title="홈" />
      <Advertisement />
    </div>
  );
};

export default Home;
