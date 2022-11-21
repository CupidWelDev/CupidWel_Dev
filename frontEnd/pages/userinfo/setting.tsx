import {NextPage} from "next";
import SEO from "@components/SEO";
import Temp from "public/userInfo/temp.svg";

const Setting: NextPage = () => {

	return (
		<div>
			<SEO title={"설정"} />

			{/* 타이틀 */}
			<section>
				<p className="text-2xl text-center font-bold px-3 py-5">
					설정
				</p>
			</section>

			{/* TODO : SVG 이미지 파일 수정 */}
			{/* 메뉴 */}
			<section className={"px-5 space-y-5"}>
				{/* 마케팅 알림 수신 */}
				<button className={"w-full"}>
					<div className={"flex items-center"}>
						<Temp />
						<p className={"mx-5 text-xl"}>마케팅 알림 수신</p>
					</div>
				</button>
				{/* 개인 정보 변경 */}
				<button className={"w-full"}>
					<div className={"flex items-center"}>
						<Temp />
						<p className={"mx-5 text-xl"}>개인 정보 변경</p>
					</div>
				</button>
				{/* 로그아웃 */}
				<button className={"w-full"}>
					<div className={"flex items-center"}>
						<Temp />
						<p className={"mx-5 text-xl"}>로그아웃</p>
					</div>
				</button>
				{/* 회원 탈퇴 */}
				<button className={"w-full"}>
					<div className={"flex items-center"}>
						<Temp />
						<p className={"mx-5 text-xl"}>마케팅 알림 수신</p>
					</div>
				</button>
			</section>
		</div>
	)
}

export default Setting