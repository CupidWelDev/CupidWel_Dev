import Link from "next/link";
import Image from "next/image";
import GoBackButton from "@components/GoBackButton";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  // 뒤로가기 안띄울 라우터
  const isNotGoBack = ["/"];

  // 검색 안 띄울 라우터
  const inNotSearch = ["/userinfo"];

  // 설정 띄울 라우터
  const inSetting = ["/userinfo"];

  return (
    <div className="bg-white w-full h-[60px] flex justify-between p-4">
      {isNotGoBack.includes(router.pathname) ? null : <GoBackButton />}
      <div className="flex gap-1 justify-center items-center">
        {/*Logo + AppName*/}
        <Link href="/">
          <a>
            <div className="flex flex-row items-center">
              <Image src="/header/logo.svg" width="34px" height="34px" />
              <Image src="/header/appName.svg" width="92px" height="26px" />
            </div>
          </a>
        </Link>
      </div>

      <div className="flex gap-4 justify-center items-center ">
        {/*searchIco*/}
        {inNotSearch.includes(router.pathname) ? null : (
          <Link href="/scholarship/search/detail">
            <Image
              src="/header/searchScholarship.svg"
              width="30px"
              height="30px"
            />
          </Link>
        )}

        {/*notificationIco*/}
        <Link href="/userinfo/notification">
          <Image src="/header/notification.svg" width="30px" height="30px" />
        </Link>

        {/*setting */}
        {inSetting.includes(router.pathname) && (
          <Link href="/userinfo/setting">
            <Image src="/header/setting.svg" width="30px" height="30px" />
          </Link>
        )}
      </div>
    </div>
  );
}
