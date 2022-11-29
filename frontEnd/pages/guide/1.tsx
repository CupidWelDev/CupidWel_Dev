import { useRouter } from "next/router";
import { CupidWelGuideData } from "../../dummyData/guideData";
import { useState } from "react";
import Image from "next/image";
import First from "/public/guide/first_img.svg";
export default function FirstGuideDetail() {
  const rounter = useRouter();
  // console.log("되나?", CupidWelGuideData[Number(rounter.query.id)]);

  const [data, _] = useState(CupidWelGuideData[Number(rounter.query.id)]);
  return (
    <div className="flex flex-col items-center w-full">
      {/*  이미지*/}
      <div className="-mt-4 w-[100%] pb-[100%] bg-[url('/guide/first_img.svg')] bg-cover bg-auto bg-no-repeat" />

      {/*    Text*/}
      <div className="flex flex-col ">
        <p className="text-center"> 이렇게 활용해 보세요!</p>
      </div>
    </div>
  );
}
