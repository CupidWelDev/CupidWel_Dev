import Image from "next/image";

export default function Advertisement() {
  return (
    <div className="w-11/12 rounded-xl flex justify-center relative aspect-[69/34]">
      <Image
        src="/bannerAd/firstAd.svg"
        layout="fill"
        objectFit="contain"
        priority={true}
      />
    </div>
  );
}
