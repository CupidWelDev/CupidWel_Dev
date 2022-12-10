import { NextPage } from "next";
import Image from "next/image";

interface IUserInfo {
  school?: string;
  series?: string;
  major?: string;
  credit?: number;
  semester?: string;
}

const Income: NextPage = () => {
  return (
    <div className="w-full px-4">
      <div className="flex gap-2 items-center h-[3rem]">
        <Image
          src={"/userInfo/filter/income/icon.svg"}
          alt="학교"
          width="30"
          height="30"
        />
        <p>소득 및 거주 정보를 등록해주세요</p>
      </div>

      <div className="-mx-4 w-full border-solid border-[1px] border-gray-100 rounded-xl mb-6" />
    </div>
  );
};

export default Income;
