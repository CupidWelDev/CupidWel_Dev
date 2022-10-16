import Link from "next/link";
import { useRouter } from "next/router";

interface IPropsNavLink {
  link: string;
  text: string;
  svg: any;
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
        <div className="w-14 h-20 flex flex-col items-center justify-center pb-2">
          {svg}
          <p className="text-center text-sm w-full h-2/5">{text}</p>
        </div>
      </a>
    </Link>
  );
}
