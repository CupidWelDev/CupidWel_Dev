import type { NextPage } from "next";
import SEO from "../../components/SEO";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SearchScholarDetail: NextPage = () => {
  const router = useRouter();
  console.log(router);
  const [data, setData] = useState();

  useEffect(() => {
    //TODO Data 받아오기
    // setData()
  }, []);

  const dummyData = {
    institution: "CupidWel",
    product: "장학금 야미",
    institution_sort: "민간기업",
    product_sort: "활동장학금",
    id: router.query.id,
  };

  return (
    <div className="bg-red-100">
      <SEO title={`장학금 정보`} />
      <header>
        <div>
          <p>장학종류 : {dummyData.institution}</p>
          <p>선발인원 : </p>
          <p>선발대상 : </p>
          <p>신청기간 : </p>
          <p>신청기간 : </p>
        </div>
      </header>
      <main>
        <div>
          <p>지원 대상: </p>
          <p>제한 조건: </p>
          <p>선발 방법: </p>
          <p>신청 기간: </p>
          <p>제출 서류: </p>
        </div>
      </main>
    </div>
  );
};

export default SearchScholarDetail;
