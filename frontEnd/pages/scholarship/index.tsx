import type { NextPage } from "next";
import SEO from "@components/SEO";
import CategoryScholarship from "@components/CategoryScholarship";
import { scholarships } from "../../dummyData/schoarship";
import ScholarshipDetailHoriz from "@components/ScholarshipDetailHoriz";
import Image from "next/image";
import Darr from "public/scholarship/darr.svg";
const Scholarship: NextPage = () => {
  // 콘솔에다가 더미데이터 찍어보기
  console.log(scholarships);

  return (
    <div className="w-full h-100vh flex flex-col items-center">
      <SEO title="탐색" />

      {/* 장학금 정보 */}
      <section className="w-full flex flex-col gap-2">
        <div className={"flex justify-between px-5"}>
          <span className="text-xl font-bold">장학금 정보</span>
          <button>
            <span className="text-xs flex items-center gap-1">
              인기순
              <Darr />
              {/*<Image*/}
              {/*  src={"/scholarship/darr.svg"}*/}
              {/*  alt="darr"*/}
              {/*  width={10}*/}
              {/*  height={10}*/}
              {/*/>*/}
            </span>
          </button>
        </div>
        <CategoryScholarship />
      </section>

      {/* 장학금 목록 */}
      <section className="w-full flex flex-col px-5 mt-5">
        {/*{scholarships.map((scholarship, _) => (*/}
        {/*  <div key={_} className={"flex justify-center items-center"}>*/}
        {/*    <ScholarshipDetailHoriz*/}
        {/*      id={scholarship.id}*/}
        {/*      img={scholarship.img}*/}
        {/*      foundation={scholarship.foundation}*/}
        {/*      title={scholarship.title}*/}
        {/*      startPeriod={scholarship.startPeriod}*/}
        {/*      endPeriod={scholarship.endPeriod}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*))}*/}
      </section>
    </div>
  );
};

export default Scholarship;
