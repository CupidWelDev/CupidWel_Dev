import type { NextPage } from "next";
import SEO from "../../components/SEO";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
//TODO : API 연동 후 삭제
import { dummyData } from "../../dummyData/schoarship";

interface IScholarData {
  institution: string;
  product: string;
  institution_sort: string;
  product_sort: string;
  schoolexpense_sort: string;
  univ_sort: string;
  grade_sort: string;
  major_sort: string;
  grade_stand_detail: string;
  income_stand_detail: string;
  support_detail: string;
  qualification_detail: string;
  local_residence_detail: string;
  duration_detail: string;
  selection_way_detail: string;
  selection_num_detail: string;
  qualification_restriction_detail: string;
  recommendation_detail: string;
  documentaion_detail: string;
  created_dt: string;
  modified_dt: string;
}

const SearchScholarDetail: NextPage = () => {
  const router = useRouter();
  console.log(router);
  const [data, setData] = useState<IScholarData>();

  useEffect(() => {
    //TODO Data 받아오기
    setData(dummyData);
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <SEO title={`장학금 정보`} />
      {/*TODO test 후 삭제 */}
      <p>장학금 번호 : {router.query.id}</p>
      <section className="w-11/12 mb-14">
        <div className="flex flex-col">
          <p className="text-2xl">{dummyData.product}</p>
          <div className="mt-8">
            <p className="text-xl font-bold">장학지원 내용</p>
            <p className="text-sm">{dummyData.support_detail}</p>
          </div>
          <div className="mt-8">
            <p className="text-xl font-bold">선발 대상</p>
            <p className="font-bold">대학</p>
            <p className="text-sm">{dummyData.univ_sort}</p>
            <p className="font-bold">학년</p>
            <p className="text-sm">{dummyData.grade_sort}</p>
            <p className="font-bold">학과</p>
            <p className="text-sm">{dummyData.major_sort}</p>
            <p className="font-bold">특정자격</p>
            <p className="text-sm">{dummyData.qualification_detail}</p>
          </div>
          <div className="mt-8">
            <p className="text-xl font-bold">선발인원</p>
            <p className="text-sm"> {dummyData.selection_num_detail}</p>
          </div>
          <div className="mt-8">
            <p className="text-xl font-bold">신청기간</p>
            <p className="text-sm">{dummyData.duration_detail}</p>
          </div>
        </div>
        <section className="w-11/12 mb-8">
          <div className="mt-8">
            <p className="text-2xl font-bold">세부내용</p>
            <p className="text-sm">자세한 내용 담기</p>
          </div>
        </section>
      </section>
      <section className="w-11/12 mb-8">
        <div className="flex justify-around">
          <button className="text-xl w-[150px] h-[50px] border-2 border-amber-400 rounded-2xl ">
            <p className="text-xl text-amber-500 font-bold">장학금 스크랩</p>
          </button>
          <button className="text-xl w-[150px] h-[50px] border-2 border-amber-400 rounded-2xl ">
            <p className="text-xl text-amber-500 font-bold">장학금 공유하기</p>
          </button>
        </div>

        <div className="flex flex-col items-center">
          <br />
          <p className="text-2xl">잘못된 정보인가요?</p>
        </div>
        <p className="text-sm">
          잘못된 정보가 떴다면 알려주세요 <br />
          여러분의 피드백으로 좀 더 정확한 매칭이 가능해집니다:) <br />
          {/*TODO 이미지 만들어서 넣기*/}
          image 넣기
        </p>
      </section>
    </div>
  );
};

export default SearchScholarDetail;
