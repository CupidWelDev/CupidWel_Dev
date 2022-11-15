import type { NextPage } from "next";
import SEO from "@components/SEO";

const Partnership: NextPage = () => {
  return (
    <div className="">
      <SEO title="알림" />
      {/*CupidWel 소개*/}
      <div className="p-4">
        <p className="text-2xl text-center">CupidWel </p>
        <p>
          CupidWel은 대학생들에게 자신이 받을 수 있는 장학금을 매칭하여 알려주는
          플랫폼입니다.
        </p>
        <p>CupidWel을 통해 우수한 인재의 든든한 후원자가 되어주세요</p>
      </div>
      {/*기업제휴 */}
      <div className="bg-[#f5f7f9] p-4">
        <p className="text-2xl text-center">기업 제휴 </p>
        <div className="flex flex-col items-center justify-around mt-4">
          <div className="p-8 round-xl rounded-xl bg-white mb-4 w-11/12 h-[400px]">
            <p className="text-center text-xl font-bold">장학금 등록하기</p>
            <p>블라블라블라블라</p>
          </div>
          <div className="p-8 round-xl rounded-xl bg-white mb-4 w-11/12 h-[400px]">
            <p className="text-center text-xl font-bold">뛰어난 인재 구하기</p>
            <p>블라블라블라블라</p>
          </div>
          <div className="p-8 round-xl rounded-xl bg-white mb-4 w-11/12 h-[400px]">
            <p className="text-center text-xl font-bold">세번째</p>
            <p>블라블라블라블라</p>
          </div>
          <div className="bg-white rounded-2xl p-4 w-full">
            <p className="text-2xl text-center font-bold mb-4">문의처</p>
            <p>담당자 : 미디어팀</p>
            <p>전화상담 : 010-2373-9147</p>
            <p>메일상담 : cupW@cupidwel.com</p>
          </div>
        </div>
      </div>
      {/*광고문의*/}
      {/*TODO 지표 만들기*/}
      <div className="m-4">
        <p className="text-2xl">지표 보여주기</p>
        <p>일일 이용자수</p>
        <p>월 이용자수</p>
        <p>MAU</p>
      </div>
      <div className="bg-[#f5f7f9] p-4">
        <p className="text-2xl text-center font-bold mb-4">광고 문의 </p>
        <div className="bg-white rounded-2xl p-4">
          <p className="text-xl  mb-4 font-bold">광고 문의처</p>
          <p>담당자 : 미디어팀</p>
          <p>전화상담 : 010-2373-9147</p>
          <p>메일상담 : cupW@cupidwel.com</p>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
