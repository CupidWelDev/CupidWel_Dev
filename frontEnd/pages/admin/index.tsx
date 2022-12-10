import { NextPage } from "next";
import SEO from "@components/SEO";
import Link from "next/link";

const Admin: NextPage = () => {
  return (
    <div className="w-[100vw] flex justify-around">
      <SEO title="관리자 페이지" />
      <Link href="/admin/scholarship">
        <a>
          <div className=" bg-amber-500 w-[100px] h-[100px]">
            장학금 추가 / 삭제
          </div>
        </a>
      </Link>
      {/*<Link href="/admin/userinfo">*/}
      {/*  <a>*/}
      {/*    <div className=" bg-amber-500 w-[100px] h-[100px]">유저 정보</div>*/}
      {/*  </a>*/}
      {/*</Link>*/}
      <Link href="/admin/notification">
        <a>
          <div className=" bg-amber-500 w-[100px] h-[100px]">공지사항 추가</div>
        </a>
      </Link>
      <Link href="/admin/qa">
        <a>
          <div className=" bg-amber-500 w-[100px] h-[100px]">질문-답변</div>
        </a>
      </Link>
      {/*<Link href="/admin/alert">*/}
      {/*  <a>*/}
      {/*    <div className=" bg-amber-500 w-[100px] h-[100px]">알림 알리기</div>*/}
      {/*  </a>*/}
      {/*</Link>*/}
    </div>
  );
};

export default Admin;
