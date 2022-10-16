import NavLink from "./NavLink";
import { useState } from "react";
import { useRouter } from "next/router";

export default function NavBar(): JSX.Element {
  const [tabs, setTab] = useState([
    {
      name: "홈",
      link: "/",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19.834"
          height="21.61"
          viewBox="0 0 19.834 21.61"
        >
          <path
            id="패스_4228"
            data-name="패스 4228"
            d="M1718.665,608.461v10.781a2.106,2.106,0,0,1-2.107,2.107h-14.421a2.106,2.106,0,0,1-2.107-2.107h0V608.461a2.182,2.182,0,0,1,.874-1.746l6.914-5.186a2.55,2.55,0,0,1,3.062,0l6.914,5.186A2.179,2.179,0,0,1,1718.665,608.461Z"
            transform="translate(-1699.431 -600.339)"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.2"
          />
        </svg>
      ),
    },
    {
      name: "탐색",
      link: "/SearchScholarship",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
        >
          <g
            id="그룹_57668"
            data-name="그룹 57668"
            transform="translate(-1610.476 -496.074)"
          >
            <circle
              id="타원_1564"
              data-name="타원 1564"
              cx="10.5"
              cy="10.5"
              r="10.5"
              transform="translate(1610.476 496.074)"
            />
            <g
              id="그룹_57669"
              data-name="그룹 57669"
              transform="translate(116.31 1294.683) rotate(-45)"
            >
              <path
                id="패스_23520"
                data-name="패스 23520"
                d="M6.985,0,0,2.863,6.985,5.725,13.97,2.863Z"
                transform="translate(1623.839 499.958) rotate(90)"
                fill="#fff"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              />
              <ellipse
                id="타원_1565"
                data-name="타원 1565"
                cx="1.25"
                cy="1.25"
                rx="1.25"
                ry="1.25"
                transform="translate(1619.726 505.693)"
              />
            </g>
          </g>
        </svg>
      ),
    },
    {
      name: "스크랩",
      link: "/Scrap",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17.84"
          height="19.193"
          viewBox="0 0 17.84 19.193"
        >
          <path
            id="패스_20942"
            data-name="패스 20942"
            d="M2170.773,612.091v17.283a.954.954,0,0,1-1.428.828l-7.018-4.007a.954.954,0,0,0-.947,0l-7.019,4.007a.954.954,0,0,1-1.428-.828V612.091a.955.955,0,0,1,.955-.955h15.931A.955.955,0,0,1,2170.773,612.091Z"
            transform="translate(-2152.933 -611.136)"
          />
        </svg>
      ),
    },
    {
      name: "내정보",
      link: "/UserInfo",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18.685"
          height="20.455"
          viewBox="0 0 18.685 20.455"
        >
          <g
            id="그룹_56653"
            data-name="그룹 56653"
            transform="translate(-54 -736)"
          >
            <circle
              id="타원_1559"
              data-name="타원 1559"
              cx="5.294"
              cy="5.294"
              r="5.294"
              transform="translate(58.048 736)"
            />
            <path
              id="사각형_20892"
              data-name="사각형 20892"
              d="M5,0h8.685a5,5,0,0,1,5,5V6.986a1.5,1.5,0,0,1-1.5,1.5H1.5A1.5,1.5,0,0,1,0,6.986V5A5,5,0,0,1,5,0Z"
              transform="translate(54 747.97)"
            />
          </g>
        </svg>
      ),
    },
  ]);

  const router = useRouter();
  // console.log(router.pathname);
  //TODO NavBar 안 띄울 라우터들
  const isNavBar = ["/SearchScholarship"];
  return (
    <>
      {isNavBar.includes(router.pathname) ? null : (
        <div className="fixed bottom-0 w-screen h-20 bg-white  ">
          <nav className="flex gap-4 justify-around  items-center text-purple-200">
            {/*<Image src="/favicon.ico" width="30" height="30" />*/}
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
