import { useRouter } from "next/router";
import { CupidWelGuideData } from "../../dummyData/guideData";
import { useState } from "react";
import Image from "next/image";

export default function GuideDetail() {
  const router = useRouter();
  // console.log("되나?", CupidWelGuideData[Number(router.query.id)]);

  // const [data, _] = useState(CupidWelGuideData[Number(router.query.id)]);
  return (
    <div className="flex flex-col items-center">
      {/*<Image src={data.svg} width="350px" height="100px" />*/}
      {/*<p className="mt-4 text-2xl mb-6">{data.title}</p>*/}
      {/*<p>content : {data.content}</p>*/}
      <p className="mt-4 text-2xl mb-6">test</p>
    </div>
  );
}
