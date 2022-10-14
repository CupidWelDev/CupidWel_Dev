import type { NextPage } from "next";
import Header from "../components/Header";
import SEO from "../components/SEO";

const Home: NextPage = () => {
    return (
        <div className="bg-amber-100 w-screen h-screen flex-col ">
            <SEO title="홈" />
            <Header />
            <p className="text-2xl m-2">test test test</p>
        </div>
    );
};

export default Home;
