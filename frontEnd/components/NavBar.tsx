import NavLink from "./NavLink";
import { useState } from "react";
import { useRouter } from "next/router";

export default function NavBar(): JSX.Element {
  const [tabs, setTab] = useState([
    {
      name: "홈",
      link: "/",
      svg: "/navBar/home.svg",
    },
    {
      name: "탐색",
      link: "/Scholarship",
      svg: "/navBar/search.svg",
    },
    {
      name: "스크랩",
      link: "/Scrap",
      svg: "/navBar/scrap.svg",
    },
    {
      name: "내정보",
      link: "/UserInfo",
      svg: "/navBar/myInfo.svg",
    },
  ]);

  const router = useRouter();
  // console.log(router.pathname);
  //TODO NavBar 안 띄울 라우터들
  const isNavBar = ["/SearchScholarship", "/Scholarship/[id]"];

  return (
    <>
      {isNavBar.includes(router.pathname) ? null : (
        <div className="fixed -bottom-4 w-[375px] h-20 bg-white">
          <nav className="flex gap-4 justify-around  items-center text-purple-200 shadow">
            {tabs.map((tab, idx) => (
              <NavLink
                key={idx}
                link={tab.link}
                text={tab.name}
                svg={tab.svg}
              />
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
