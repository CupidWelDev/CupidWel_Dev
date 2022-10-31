import type { NextPage } from "next";
import SEO from "../../components/SEO";
import CupidWelGuide from "../../components/CupidWelGuide";
import { CupidWelGuideData } from "../../dummyData/guideData";

const Guide: NextPage = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <SEO title="가이드" />
      <p className="text-2xl mt-10">CupidWel 알아보기</p>
      {CupidWelGuideData.map((guide, idx) => (
        <CupidWelGuide key={idx} id={idx} img={guide.svg} />
      ))}
    </div>
  );
};

export default Guide;
