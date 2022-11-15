import { useRouter } from "next/router";
import Image from "next/image";

export default function GoBackButton() {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };

  return (
    <button className="pr-5" onClick={onClick}>
      <Image src="/header/goBack.svg" width="30px" height="30px" />
    </button>
  );
}
