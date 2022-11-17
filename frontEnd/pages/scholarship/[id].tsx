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

const SearchScholarDetail: NextPage = () => {
  const router = useRouter();
  console.log(router);

  // indexedDB

  const { isLoading, error, data } = useGetScholarshipDetailQuery<
    GetScholarshipDetailQuery,
    Error
  >(graphqlRequestClient, { scholarshipId: router.query.id as string });

  const { getScholarshipDetail: detailData } = data || {};

  !isLoading && addDB(detailData, "scholarship");

  console.log(detailData);

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

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center p-4">
      <SEO title={`장학금 정보`} />
      {/*TODO test 후 삭제 */}
      <section className="w-11/12 mb-14">
        <div className="flex flex-col">
          <p className="text-2xl text-center">{detailData?.product}</p>
          <div className="mt-8 border-2 border-amber-500 p-4 rounded-2xl flex flex-col">
            <p className="text-xl font-bold border-b-2 border-amber-400 mb-2 w-full text-center">
              장학지원 내용
            </p>
            <p className="text-sm">{detailData?.supportDetail}</p>
          </div>
          <div className="mt-8 border-2 border-amber-500 p-4 rounded-2xl flex flex-col">
            <p className="text-xl font-bold border-b-2 border-amber-400 mb-2 w-full text-center">
              선발 대상
            </p>
            <p className="font-bold">대학</p>
            <p className="text-sm">{detailData?.univSort}</p>
            <p className="font-bold">학년</p>
            <p className="text-sm">{detailData?.gradeSort}</p>
            <p className="font-bold">학과</p>
            <p className="text-sm">{detailData?.majorSort}</p>
            <p className="font-bold">특정자격</p>
            <p className="text-sm">{detailData?.qualificationDetail}</p>
          </div>
          <div className="mt-8 border-2 border-amber-500 p-4 rounded-2xl flex flex-col">
            <p className="text-xl font-bold border-b-2 border-amber-400 mb-2 w-full text-center">
              선발인원
            </p>
            <p className="text-sm"> {detailData?.selectionNumDetail}</p>
          </div>
          <div className="mt-8 border-2 border-amber-500 p-4 rounded-2xl flex flex-col">
            <p className="text-xl font-bold border-b-2 border-amber-400 mb-2 w-full text-center">
              신청기간
            </p>
            <div className="flex justify-center gap-10">
              {dummyData.duration_detail.split("~").join(" ~ ")}
            </div>
          </div>
        </div>
        <section className="w-11/12 mb-8">
          <div className="mt-16">
            <p className="text-xl font-bold">세부내용</p>
            <p className="text-sm">자세한 내용 담기</p>
          </div>
        </section>
      </section>
      <section className="w-11/12 mb-8">
        <div className="flex justify-around">
          <button
            className="text-xl w-[150px] h-[50px] border-2 border-amber-400 rounded-2xl"
            onClick={scrap}
          >
            <p className="text-xl text-amber-500 font-bold">장학금 스크랩</p>
          </button>
          <button
            className="text-xl w-[150px] h-[50px] border-2 border-amber-400 rounded-2xl"
            onClick={copyLink}
          >
            <p className="text-xl text-amber-500 font-bold">장학금 공유하기</p>
          </button>
        </div>

        <div className="mt-8 border-2 border-amber-500 p-4 rounded-2xl flex flex-col">
          <div className="flex flex-col">
            <p className="text-xl font-bold border-b-2 border-amber-400 mb-2 w-full text-center">
              잘못된 정보인가요?
            </p>
          </div>
          <p className="text-sm">
            잘못된 정보가 떴다면 알려주세요 <br />
            여러분의 피드백으로 좀 더 정확한 매칭이 가능해집니다:) <br />
            {/*TODO 이미지 만들어서 넣기*/}
            image 넣기
          </p>
        </div>
      </section>
    </div>
  );
};

export default SearchScholarDetail;
