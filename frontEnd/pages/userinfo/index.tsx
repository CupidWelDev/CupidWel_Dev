import type { NextPage } from "next";
import SEO from "@components/SEO";
import Link from "next/link";
import { useState } from "react";
import Carousel from "@components/Carousel";
import Image from "next/image";

const UserInfo: NextPage = () => {
  const [user, setUser] = useState({ name: "조재훈", end: 1 });

  const list = [
    {
      url: "/userinfo/",
      svg: "/userinfo/view.svg",
      title: "최근 본 장학금",
    },
    {
      url: "/userinfo/",
      svg: "/userinfo/systemNotification.svg",
      title: "내 질문",
    },
    {
      url: "/userinfo/",
      svg: "/userinfo/systemNotification.svg",
      title: "공지사항",
    },
    {
      url: "/userinfo/fqa",
      svg: "/userinfo/fqa.svg",
      title: "자주 묻는 질문",
    },
    {
      url: "/userinfo/policy",
      svg: "/userinfo/policy.svg",
      title: "이용약관/개인정보취급방침",
    },
    {
      url: "/userinfo/partnership",
      svg: "/userinfo/partnership.svg",
      title: "기업 제휴/광고 문의",
    },
  ];

  return (
    <div className="p-4">
      <SEO title="내 정보" />
      <p className="text-xl font-bold w-[240px]">
        {user.name}님에게 맞는 장학금은 어디있을까요?
      </p>
      {/*맞춤 필터*/}
      <section>
        <div className="flex justify-between font-bold mt-2 md-2">
          <p>장학금 맞춤필터</p>
          <p> {user.end}/3완료</p>
        </div>
        <div className="mb-4 flex w-full justify-around">
          {/*학교 관련*/}
          <div className="w-5/12 h-[13rem] drop-shadow-lg border-2 rounded-2xl flex flex-col justify-center items-center gap-[0.3rem] m-4 ">
            <Image
              src={"/userInfo/filter/school.svg"}
              alt="학교"
              width="40"
              height="40"
            />
            <p className="text-center font-semibold text-lg">학교/학과 설정</p>
            <p className="text-center font-medium text-sm w-11/12 opacity-50">
              재학중인 학교와 학과등을 등록해주세요.
            </p>
            <Link href={"/userinfo/filter/school"} className={"w-full"}>
              <a>
                <button className="bg-blue-500 text-white rounded-lg w-[6rem] h-[2rem] bg-[#FC5230] rounded-3xl w-[4.6rem]">
                  등록하기
                </button>
              </a>
            </Link>
          </div>
          {/*소득/거주 관련*/}
          <div className="w-5/12 h-[13rem] drop-shadow-lg border-2 rounded-2xl flex flex-col justify-center items-center gap-[0.3rem] m-4 ">
            <Image
              src={"/userInfo/filter/income.svg"}
              alt="학교"
              width="40"
              height="40"
            />
            <p className="text-center font-semibold text-lg ">소득/거주 설정</p>
            <p className="text-center font-medium text-sm w-11/12 opacity-50">
              소득분위 및 거주지를 등록해주세요.
            </p>
            <Link href={"/userinfo/filter/income"} className={"w-full"}>
              <a>
                <button className="bg-blue-500 text-white rounded-lg w-[6rem] h-[2rem] bg-[#FC5230] rounded-3xl w-[4.6rem]">
                  등록하기
                </button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <div className="border-2 border-gray-100 -ml-4 -mr-4 mb-4" />
      {list.map((li, idx) => (
        <div key={idx} className="flex items-center gap-2 h-[50px]">
          <Image src={li.svg} width="30px" height="30px" alt="내 정보 아이콘" />
          <Link href={li.url}>
            <a>
              <p>{li.title}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UserInfo;
