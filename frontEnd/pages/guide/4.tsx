import { useRouter } from "next/router";
import { CupidWelGuideData } from "../../dummyData/guideData";
import { useState } from "react";
import Image from "next/image";

export default function FourthGuideDetail() {
  const rounter = useRouter();
  // console.log("되나?", CupidWelGuideData[Number(rounter.query.id)]);

  const [data, _] = useState(CupidWelGuideData[Number(rounter.query.id)]);
  return (
    <div className="flex flex-col items-center">
      <p className="mt-4 text-2xl mb-6">{data.title}</p>
      <p>content : {data.content}</p>
    </div>
  );
}
