import { useRouter } from "next/router";
import { CupidWelGuideData } from "../../dummyData/guideData";
import { useState } from "react";

import Img1 from "/public/guide/first_list1.svg";
import Img2 from "/public/guide/first_list2.svg";

export default function GuideDetail() {
  const router = useRouter();
  console.log("되나?", router.query.id);

  const [data, _] = useState(CupidWelGuideData[Number(router.query.id)]);

  // 큐피드웰 200%활용하기
  if (router.query.id === "1")
    return (
      <div className="flex flex-col items-center w-full">
        {/* 이미지*/}
        <div className="-mt-4 w-[100%] pb-[100%] bg-[url('/guide/first_img.svg')] bg-cover bg-no-repeat" />

        {/* Text*/}
        <div className="flex flex-col">
          <div className="flex justify-center items-center my-20 ">
            <h2 className="text-center text-4xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-[#FF2B65] to-[#FC5230]">
              이렇게 활용해 보세요!
            </h2>
          </div>

          {/*  사용법1*/}
          <div className="flex flex-col items-center gap-2 my-10">
            <Img1 />
            <div>
              <h2>CupidWel 사용법 첫번째!</h2>
              <p>사용법 </p>
            </div>
          </div>

          {/*   사용법2*/}
          <div className="flex flex-col items-center gap-2 my-10">
            <Img2 />
            <div>
              <h2>CupidWel 사용법 두번째!</h2>
              <p>사용법 사용법</p>
            </div>
          </div>
        </div>
      </div>
    );
  // 장학금이란?
  else if (router.query.id === "2")
    return (
      <div className="flex flex-col items-center w-full">
        {/*  이미지*/}
        <div className="-mt-4 w-[100%] pb-[100%] bg-[url('/guide/second_img.svg')] bg-cover bg-no-repeat" />

        {/*    Text*/}
        <div className="w-full bg-gradient-to-r from-[#72AFFF] to-[#297FF1] flex justify-center pb-10">
          <div className="w-11/12 bg-white rounded-2xl flex flex-col px-4">
            <h2 className="text-center text-blue-600 text-2xl my-10">
              장학금이란?
            </h2>
            <p>장학금이란 어쩌구 저쩌구</p>
            <p>장학금이란 어쩌구 저쩌구</p>
            <p>장학금이란 어쩌구 저쩌구</p>
            <p>장학금이란 어쩌구 저쩌구</p>
            <p>장학금이란 어쩌구 저쩌구</p>
          </div>
        </div>
      </div>
    );
  // 다운로드 받는 방법
  else if (router.query.id === "3")
    return (
      <div className="flex flex-col items-center w-full">
        {/*  이미지*/}
        <div className="-mt-4 w-[100%] pb-[100%] bg-[url('/guide/third_img.svg')] bg-cover bg-no-repeat" />

        {/*    Text*/}
        <div className="w-full flex flex-col gap-20 mb-10">
          <div className="w-11/12 flex flex-col items-center">
            <h2>안드로이드 phone</h2>
            <p>어쩌구저쩌구</p>
          </div>

          <div className="w-11/12 flex flex-col items-center">
            <h2>IOS phone</h2>
            <p>어쩌구저쩌구</p>
          </div>
        </div>
      </div>
    );
}
