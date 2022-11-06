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
      svg: "/userInfo/view.svg",
      title: "최근 본 장학금",
    },
    {
      url: "/userinfo/",
      svg: "/userInfo/systemNotification.svg",
      title: "내 질문",
    },
    {
      url: "/userinfo/",
      svg: "/userInfo/systemNotification.svg",
      title: "공지사항",
    },
    {
      url: "/userinfo/fqa",
      svg: "/userInfo/fqa.svg",
      title: "자주 묻는 질문",
    },
    {
      url: "/userinfo/policy",
      svg: "/userInfo/policy.svg",
      title: "이용약관/개인정보취급방침",
    },
    {
      url: "/userinfo/partnership",
      svg: "/userInfo/partnership.svg",
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
        {/*    TODO 캐러셸*/}
        <ul className=" border-4 rounded-2xl mb-4">
          필터링 항목들
          <li>학교/소속/전공/학점/재학유무</li>
          <li>소득분위/특수계층/월소득</li>
          <li>주소/가구원/결혼유무</li>
          <li>부모님 직장/거주지역</li>
        </ul>
      </section>

      <div className="border-2 border-gray-100 -ml-4 -mr-4 mb-4" />
      {list.map((li, idx) => (
        <div key={idx} className="flex items-center gap-2 h-[50px]">
          <Image src={li.svg} width="30px" height="30px" />
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
