import type { NextPage } from "next";
import SEO from "../../components/SEO";
import Link from "next/link";

const UserInfo: NextPage = () => {
  return (
    <div>
      <SEO title="내 정보" />
      <p className="text-2xl">내정보</p>
      <Link href="/userinfo/notification">
        <a>
          <p>알림</p>
        </a>
      </Link>
      <Link href="/userinfo/policy">
        <a>
          <p>개인정보 동의서</p>
        </a>
      </Link>
      <Link href="/userinfo/partnership">
        <a>
          <p>기업 제휴/광고 문의 </p>
        </a>
      </Link>
    </div>
  );
};

export default UserInfo;
