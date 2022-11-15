import Image from "next/image";

export default function Advertisement() {
  return (
    <div className="w-full h-[170px] rounded-xl flex justify-center">
      <Image src="/bannerAd/firstAd.svg" width="345px" height="170px" />
    </div>
  );
}
