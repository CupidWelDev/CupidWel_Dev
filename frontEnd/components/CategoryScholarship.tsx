import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//TODO 카테고리별 Link 달아놓기
export default function CategoryScholarship() {
  const [categorys, setCategorys] = useState([
    { title: "등록금", svg: "/category/tuitionFee.svg", link: "/userinfo" },
    { title: "생활비", svg: "/category/livingExpenses.svg", link: "/userinfo" },
    {
      title: "활동 지원금",
      svg: "/category/activitySupportFund.svg",
      link: "/userinfo",
    },
    {
      title: "중복 수혜",
      svg: "/category/doubleBenefit.svg",
      link: "/userinfo",
    },
  ]);

  const [login, setLogin] = useState(true);

  const [user, setUser] = useState([
    { num: 2 },
    { num: 5 },
    { num: 8 },
    { num: 11 },
  ]);

  const router = useRouter();
  const isNotNumber = ["/scrap"];

  return (
    <div
      className="w-full pt-2
                    flex flex-row gap-6 justify-center"
    >
      {categorys.map((category, idx) => (
        <div className="flex flex-col items-center" key={idx}>
          <div
            className="w-[64px] h-[64px] bg-[#F2F2F2] mb-2 rounded-3xl
                            flex justify-center"
          >
            <Image src={category.svg} width="46px" height="46px" />
          </div>
          <p className="text-xs opacity-50">{category.title}</p>
          {login && !isNotNumber.includes(router.pathname) ? <p className="text-xl">{user[idx].num}</p> : null}
        </div>
      ))}
    </div>
  );
}
