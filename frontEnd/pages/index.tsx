import type { NextPage } from "next";
import SEO from "../components/SEO";
import Advertisement from "../components/Advertisement";
import CategoryScholarship from "../components/CategoryScholarship";
import CupidWelGuide from "../components/CupidWelGuide";
import Footer from "../components/Footer";
// @ts-ignore
import Carousel from "../components/Carousel";
import ScholarshipDetailVer from "../components/ScholarshipDetailVer";
import Link from "next/link";

//dummy
import { scholarships } from "../dummyData/schoarship";
import { CupidWelGuideData } from "../dummyData/guideData";

const Home: NextPage = () => {
  return (
    <div className="h-100vh flex flex-col items-center">
      {/*<Header />*/}
      <SEO title="홈" />

      {/* 광고 화면*/}
      <section className="w-full mb-8">
        <Advertisement />
      </section>

      {/* 카테고리별 장학금*/}
      <section className="w-11/12 mb-8 flex flex-col items-center">
        <p className="text-xl font-semibold w-[330px]"> 내 맞춤 장학금</p>
        <CategoryScholarship />
      </section>
      <div className="w-full border-solid border-2 border-gray-200 rounded-xl mb-6"></div>

      {/* 큐피트웰 활용법*/}
      <section className="w-11/12 mb-8">
        <div className="flex flex-row justify-between mr-3">
          <p className="text-sm font-semibold">큐피드웰 활용법</p>
          <Link href="/guide">
            <a>
              <p className="text-xs opacity-30"> 전체보기 {">"} </p>
            </a>
          </Link>
        </div>

        {/*  TODO 가이드 상세 페이지 만들어서 Link 달기*/}
        <div className="w-full h-[70px]">
          <Carousel
            slides={CupidWelGuideData.map((guide, idx) => (
              <CupidWelGuide key={idx} id={idx} img={guide.svg} />
            ))}
          />
        </div>
      </section>

      {/* 추천 장학금 */}
      <section className="w-11/12 mb-8 h-[240px]">
        <p className="text-xl font-semibold mb-4">추천 장학금</p>
        <div className="w-full h-[200px]">
          <Carousel
            slides={scholarships.map((scholarship, idx) => (
              <ScholarshipDetailVer key={idx} {...scholarship} />
            ))}
          />
        </div>
      </section>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
