import type { NextPage } from "next";
import SEO from "@components/SEO";
import { useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
//TODO : API 연동 후 삭제
import { dummyData, scholarships } from "../../dummyData/schoarship";
import { IScholarData } from "@ITypes/schoalship";
import RecentlyVIew from "@components/RecentlyVIew";
import { addDB } from "@libs/IndexedDB";
import {
  GetScholarshipDetailQuery,
  useGetScholarshipDetailQuery,
} from "@src/generated/graphql";
import graphqlRequestClient from "@src/lib/client/graphqlReuestClient";
import LoadingButton from "@mui/lab/LoadingButton";
import BgImg from "public/scholarship/bgImg.svg";
import Image from "next/image";
import ScholarshipBgImg from "@components/ScholarshipBgImg";

import Svg1 from "public/scholarship/1.svg";
import Svg2 from "public/scholarship/2.svg";
import Svg3 from "public/scholarship/3.svg";
import Svg4 from "public/scholarship/4.svg";
import Svg5 from "public/scholarship/5.svg";

const SearchScholarDetail: NextPage = () => {
  const router = useRouter();
  // console.log(router);

  // indexedDB

  const { isLoading, error, data } = useGetScholarshipDetailQuery<
    GetScholarshipDetailQuery,
    Error
  >(graphqlRequestClient, { scholarshipId: router.query.id as string });

  const { getScholarshipDetail: detailData } = data || {};

  // !isLoading && addDB(detailData, "scholarship");

  // console.log(detailData);

  const scrap = () => {
    alert(
      `'${dummyData.product}'이 스크랩 되었습니다. 장학금 번호 : ${router.query.id}`
    );
  };

  const copyLink = () => {
    let url = "";
    url = window.document.location.href; //url에는 현재 주소값을 넣어줌
    // console.log(url);

    // 브라우저가 clipboard API 가능한지 확인
    if (!navigator.clipboard) {
      // Clipboard API not available
      return console.log("안됨");
    }

    // 클립보드에 복사
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("링크가 복사되었습니다. 친구들에게 공유해보세요!");
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };

  // if (isLoading)
  //   return (
  //     <div className="w-full h-[13rem] flex justify-center items-center">
  //       <LoadingButton loading variant="outlined" color="secondary">
  //         잠시만 기다려주세요
  //       </LoadingButton>
  //     </div>
  //   );

  return (
    <div className="flex flex-col relative">
      <SEO title={`장학금 정보`} />
      <section className="w-full flex flex-col items-center relative">
        {/*장학금 이름 */}
        <p className="text-xl text-center font-bold mt-6">
          {dummyData?.product}
        </p>
        <p className="text-sm text-center font-[400] mb-2">
          {dummyData?.institution}
        </p>

        {/* 배경이미지*/}
        <ScholarshipBgImg text={dummyData?.product} type={"big"} />

        {/* 세부내용 */}
        <div className="w-11/12 flex flex-col justify-center z-10">
          {/*장학지원 내용*/}
          <div className="-mt-12 shadow-lg p-4 rounded-2xl flex flex-col bg-white">
            <div className="flex justify-center items-center gap-2 mb-2 pb-1 border-b-2 border-amber-400">
              <Svg1 />
              <p className="text-xl font-bold text-center text-[#FB5230]">
                장학지원 내용
              </p>
            </div>
            <p className="text-sm">{dummyData?.supportDetail}</p>
          </div>

          {/*선발 대상*/}
          <div className="mt-8 shadow-lg  p-4 rounded-2xl flex flex-col">
            <div className="flex justify-center items-center gap-1 mb-2 pb-1 border-b-2 border-amber-400">
              <Svg2 />
              <p className="text-xl font-bold text-center text-[#FB5230]">
                선발 대상
              </p>
            </div>
            <p className="font-bold">대학</p>
            <p className="text-sm">{dummyData?.univSort}</p>
            <p className="font-bold">학년</p>
            <p className="text-sm">{dummyData?.gradeSort}</p>
            <p className="font-bold">학과</p>
            <p className="text-sm">{dummyData?.majorSort}</p>
            <p className="font-bold">특정자격</p>
            <p className="text-sm">{dummyData?.qualificationDetail}</p>
          </div>
          <div className="mt-8 shadow-lg  p-4 rounded-2xl flex flex-col">
            <div className="flex justify-center items-center gap-1 mb-2 pb-1 border-b-2 border-amber-400">
              <Svg3 />
              <p className="text-xl font-bold text-center text-[#FB5230]">
                선발 인원
              </p>
            </div>
            <p className="text-sm text-center">
              {detailData?.selectionNumDetail
                ? detailData?.selectionNumDetail
                : "홈페이지 내에서 확인 필수"}{" "}
            </p>
          </div>

          {/*신청기간*/}
          <div className="mt-8 shadow-lg  p-4 rounded-2xl flex flex-col">
            <div className="flex justify-center items-center gap-1 mb-2 pb-1 border-b-2 border-amber-400">
              <Svg4 />
              <p className="text-xl font-bold text-center text-[#FB5230]">
                신청 기간
              </p>
            </div>
            <div className="flex justify-center gap-10">
              {dummyData.durationDetail.split("~").join(" ~ ")}
            </div>
          </div>

          {/*세부내용*/}
          <div className="mt-8 shadow-lg  p-4 rounded-2xl flex flex-col">
            <div className="flex justify-center items-center gap-1 mb-2 pb-1 border-b-2 border-amber-400">
              <Svg5 />
              <p className="text-xl font-bold text-center text-[#FB5230]">
                세부내용
              </p>
            </div>
            <p className="text-sm text-center">홈페이지 가서 확인하기</p>
          </div>
        </div>

        {/*TODO 잘못된 정보 -> QA page*/}

        <div className="mt-12 w-11/12 mb-2">
          <p className="py-4 text-xl font-bold w-full text-center bg-black text-white rounded-xl">
            잘못된 정보인가요?
          </p>
        </div>
      </section>

      {/*TODO NavBar로 옮기기*/}
      <footer className="w-full fixed bottom-0 p-2 flex justify-center justify-around bg-white z-20 ">
        <button
          className="text-xl w-[150px] h-[50px] shadow-lg bg-[#FB5230] rounded-2xl"
          onClick={scrap}
        >
          <p className="text-xl text-white font-medium text-[1rem]">
            장학금 스크랩
          </p>
        </button>
        <button
          className="text-xl w-[150px] h-[50px] shadow-lg bg-[#FB5230] rounded-2xl"
          onClick={copyLink}
        >
          <p className="text-xl text-white font-medium text-[1rem]">
            장학금 공유하기
          </p>
        </button>
      </footer>
    </div>
  );
};

export default SearchScholarDetail;
