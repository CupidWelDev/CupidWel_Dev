import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

interface IPropsNavLink {
  link: string;
  text: string;
  svg: string;
}

export default function NavLink({
  link,
  text,
  svg,
}: IPropsNavLink): JSX.Element {
  const router = useRouter();
  // console.log(typeof router.pathname);

  return (
    <Link href={link}>
      <a
        className={
          router.pathname === link ? "text-black" : "text-black opacity-20"
        }
      >
        <div className="w-14 h-16 flex flex-col items-center justify-center pb-2 ">
          <Image src={svg} width="20px" height="20px" />
          <p className="text-center text-sm w-full">{text}</p>
        </div>
      </a>
    </Link>
  );
}
