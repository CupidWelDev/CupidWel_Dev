import type { NextPage } from "next";
import SEO from "../../../components/SEO";
import { cls } from "../../../libs/utils";
import { useState } from "react";
const Notification: NextPage = () => {
  const [method, setMethod] = useState<"scholarship" | "system">("scholarship");

  const onEmailClick = () => {
    setMethod("scholarship");
  };
  const onPhoneClick = () => {
    setMethod("system");
  };
  return (
    <div className="p-4">
      <SEO title="알림" />

      {/*알림 종류*/}
      <div className="flex mb-6">
        <button
          className={cls(
            "pb-4 font-medium text-sm border-b-2 w-1/2",
            method === "scholarship"
              ? " border-orange-500 text-orange-400"
              : "border-transparent hover:text-gray-400 text-gray-500"
          )}
          onClick={onEmailClick}
        >
          <p className="text-xl">장학금 알림</p>
        </button>
        <button
          className={cls(
            "pb-4 font-medium text-sm border-b-2 w-1/2",
            method === "system"
              ? " border-orange-500 text-orange-400"
              : "border-transparent hover:text-gray-400 text-gray-500"
          )}
          onClick={onPhoneClick}
        >
          <p className="text-xl">공지사항 알림</p>
        </button>
      </div>

      {/*알림 내용*/}
      {/*장학금 알림 */}
      {method === "scholarship" ? (
        <div className="w-full p-3 text-xl">장학금</div>
      ) : (
        <div className="w-full p-3 text-xl">공지사항</div>
      )}
    </div>
  );
};

export default Notification;
