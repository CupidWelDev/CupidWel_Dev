import type { NextPage } from "next";
import Header from "../components/Header";
import SEO from "../components/SEO";
import Advertisement from "../components/Advertisement";
import CategoryScholarship from "../components/CategoryScholarship";
import CupidWelGuide from "../components/CupidWelGuide";
// @ts-ignore
import Carousel from "../components/Carousel";

const Home: NextPage = () => {
  const CupidWelGuideData = [
    { svg: "/guide/first_guide.svg" },
    { svg: "/guide/second_guide.svg" },
    { svg: "/guide/third_guide.svg" },
    { svg: "/guide/fourth_guide.svg" },
  ];

  return (
    <div className="bg-white w-screen h-screen flex flex-col items-center">
      <Header />
      <SEO title="홈" />

      {/* 광고 화면*/}
      <section className="w-11/12 mb-8">
        <Advertisement />
      </section>

      {/* 카테고리별 장학금*/}
      <section className="w-11/12 mb-8 flex flex-col items-center">
        <p className="text-xl w-[330px]"> 내 맞춤 장학금</p>
        <CategoryScholarship />
      </section>
      <div className="w-full border-solid border-2 border-gray-200 rounded-xl mb-6"></div>

      {/* 큐피트웰 활용법*/}
      <section className="w-11/12 mb-8">
        <div className="flex flex-row justify-between mr-3">
          <p className="text-sm">큐피드웰 활용법</p>
          <p className="text-xs opacity-30"> 전체보기 {">"} </p>
        </div>

        <div className="w-full h-[70px]">
          <Carousel
            slides={CupidWelGuideData.map((guide, idx) => (
              <CupidWelGuide key={idx} img={guide.svg} />
            ))}
          />
        </div>
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
