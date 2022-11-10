import type { NextPage } from "next";
import SEO from "@components/SEO";
import { cls, cutText } from "@libs/utils";
import { useState } from "react";
import { scholarships } from "../../dummyData/schoarship";
import { notification } from "../../dummyData/notification";
import Image from "next/image";
import Link from "next/link";

//TODO : click시 장학금 view true로 변경
const Notification: NextPage = () => {
  const [method, setMethod] = useState<"scholarship" | "system">("scholarship");

  const onEmailClick = () => {
    setMethod("scholarship");
  };
  const onPhoneClick = () => {
    setMethod("system");
  };

  const tab = [
    {
      title: "장학금",
      focus: "scholarship",
      onClick: () => {
        setMethod("scholarship");
      },
    },
    {
      title: "공지사항",
      focus: "system",
      onClick: () => {
        setMethod("system");
      },
    },
  ];

  return (
    <div className="p-4">
      <SEO title="알림" />

      {/*알림 종류*/}
      <div className="flex mb-6">
        {tab.map((item, idx) => (
          <button
            key={idx}
            className={cls(
              "pb-4 font-medium text-sm border-b-2 w-1/2",
              method === item.focus
                ? "border-orange-500 text-orange-400"
                : "border-transparent hover:text-gray-400 text-gray-500"
            )}
            onClick={item.onClick}
          >
            <p className="text-xl">{item.title} 알림</p>
          </button>
        ))}
      </div>

      {/*알림 내용*/}
      {method === "scholarship" ? (
        //  장학금 알림
        <section className="flex flex-col gap-4 w-full  ">
          {scholarships.map((data) => (
            <Link href={`/scholarship/${data.id}`} key={data.id}>
              <a>
                <div
                  className={cls(
                    "flex w-full h-[80px] p-2 rounded-xl",
                    !data.view ? "bg-[#f9fbfa]" : "bg-[#e7e7e7]"
                  )}
                >
                  <Image src={data.img} width="70px" height="70px" />
                  <div className="flex flex-col gap-2 justify-center items-center w-[calc(100%-70px)] pl-2 ">
                    <p className="text-[16px]">{data.title}</p>
                    <div className="flex  w-full justify-around">
                      <p className="text-[10px]">
                        재단 : {cutText(data.foundation, 8)}
                      </p>
                      <p className="text-[10px]">
                        신청기간 : {data.startPeriod} ~ {data.endPeriod}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </section>
      ) : (
        //  공지사항 알림
        <section className="flex flex-col gap-4 w-full">
          {notification.map((data) => (
            <Link href={`/notification/${data.id}`} key={data.id}>
              <a>
                <div
                  className={cls(
                    "flex w-full h-[80px] p-2 rounded-xl",
                    !data.view ? "bg-[#f9fbfa]" : "bg-[#e7e7e7]"
                  )}
                >
                  <div className="flex flex-col justify-center items-center w-full">
                    <p className="text-[25px]">{cutText(data.title, 10)}</p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </section>
      )}
    </div>
  );
};

export default Notification;
