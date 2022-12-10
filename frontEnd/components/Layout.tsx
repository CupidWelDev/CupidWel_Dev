import NavBar from "@components/NavBar";
import Header from "@components/Header";
import { useRouter } from "next/router";
import { cls } from "@libs/utils";
export default function Layout({ children }: any): JSX.Element {
  const router = useRouter();

  // console.log(router.pathname.split("/")[1]);

  return (
    <div className="flex justify-center">
      <div
        className={cls(
          "w-full min-h-screen bg-white",
          router.pathname.split("/")[1] === "admin" ? null : "sm:w-[400px]"
        )}
      >
        <Header />
        <div className="mt-[70px] mb-[64px]">{children}</div>
        <NavBar />
      </div>
    </div>
  );
}
