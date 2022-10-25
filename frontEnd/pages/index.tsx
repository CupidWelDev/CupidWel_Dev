import type { NextPage } from "next";
import Header from "../components/Header";
import SEO from "../components/SEO";
import Advertisement from "../components/Advertisement";
import CategoryScholarship from "../components/CategoryScholarship";
import CupidWelGuide from "../components/CupidWelGuide";
// @ts-ignore
import Carousel from "../components/Carousel";
import { useState } from "react";
import ScholarshipDetailVer from "../components/ScholarshipDetailVer";
import Link from "next/link";

//todo flex 중앙정렬로 바꾸고 사이즈 픽스시키기
const Home: NextPage = () => {
  const [CupidWelGuideData, setCupidWelGuideData] = useState([
    { svg: "/guide/first_guide.svg" },
    { svg: "/guide/second_guide.svg" },
    { svg: "/guide/third_guide.svg" },
    { svg: "/guide/fourth_guide.svg" },
  ]);

  const [scholarships, setscholarships] = useState([
    {
      id: 1,
      img: "/scholarship/first_data.svg",
      foundation: "OK저축은행",
    },
    {
      id: 2,
      img: "/scholarship/second_data.svg",
      foundation: "전라남도 평생교육진흥원",
    },
    { id: 3, img: "/scholarship/third_data.svg", foundation: "하이원" },
  ]);

  return (
    <div className="scrollbar-hide">
      <div className="bg-white h-100vh flex flex-col items-center">
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
            <Link href="/searchscholarship">
              <a>
                <p className="text-xs opacity-30"> 전체보기 {">"} </p>
              </a>
            </Link>
          </div>

          {/*  TODO 가이드 상세 페이지 만들어서 Link 달기*/}
          <div className="w-full h-[70px]">
            <Carousel
              slides={CupidWelGuideData.map((guide, idx) => (
                <CupidWelGuide key={idx} img={guide.svg} />
              ))}
            />
          </div>
        </section>

        {/* 추천 장학금 */}
        <section className="w-11/12 mb-8 h-[200px]">
          <p className="text-xl font-semibold mb-4">추천 장학금</p>
          {/*  todo 캐러셀 컴포넌트로 감싸기*/}
          <div className="w-full h-[200px]">
            <Carousel
              slides={scholarships.map((scholarship, idx) => (
                <ScholarshipDetailVer
                  key={idx}
                  img={scholarship.img}
                  foundation={scholarship.foundation}
                  id={scholarship.id}
                />
              ))}
            />
          </div>
        </section>
        {/* footer */}
        <section className="w-11/12 mb-[80px] h-[100px]">
          <div className="h-full w-full"> footer</div>
        </section>
      </div>
    </div>
  );
};

export default Home;
