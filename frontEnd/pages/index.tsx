import type { NextPage } from "next";
import Header from "../components/Header";
import SEO from "../components/SEO";
import Advertisement from "../components/Advertisement";
import CategoryScholarship from "../components/CategoryScholarship";
import CupidWelGuide from "../components/CupidWelGuide";

const Home: NextPage = () => {
  return (
    <div className="bg-white w-screen h-screen flex flex-col items-center">
      <Header />
      <SEO title="홈" />
      {/* 광고 화면*/}
      <section className="w-11/12 mb-8">
        <Advertisement />
      </section>
      {/* 카테고리별 장학금*/}
      <section className="w-11/12 mb-8">
        <CategoryScholarship />
      </section>
      <div className="w-full border-solid border-2 border-gray-200 rounded-xl mb-8"></div>
      {/* 큐피트웰 활용법*/}
      <section className="w-11/12 mb-8">
        <CupidWelGuide />
      </section>
      {/* 추천 장학금 */}
      <section className="w-11/12 mb-8">
        <div className="w-full h-48 p-4 border-solid border-2 border-sky-500 rounded-xl">
          추천 장학금
        </div>
      </section>
    </div>
  );
};

export default Home;
