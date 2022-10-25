import type { NextPage } from "next";
import SEO from "../../components/SEO";
import Link from "next/link";

const UserInfo: NextPage = () => {
  return (
    <div className="bg-red-100">
      <SEO title="내 정보" />
      <p className="text-2xl">내정보</p>
      <Link href="/">
        <a>
          <p>알림</p>
        </a>
      </Link>
      <Link href="/">
        <a>
          <p>개인정보 동의서</p>
        </a>
      </Link>
    </div>
  );
};

export default UserInfo;
