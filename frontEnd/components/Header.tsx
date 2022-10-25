import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full h-[60px] flex justify-between p-4">
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

      {/*searchIco + notificationIco*/}
      <div className="flex gap-4 justify-center items-center ">
        <Link href="/searchscholarship">
          <Image
            src="/header/searchScholarship.svg"
            width="30px"
            height="30px"
          />
        </Link>
        <Link href="/userinfo/notification">
          <Image src="/header/notification.svg" width="30px" height="30px" />
        </Link>
      </div>
    </div>
  );
}
