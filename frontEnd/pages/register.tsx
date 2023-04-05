import type { NextPage } from "next";
import SEO from "@components/SEO";
import Image from "next/image";
import Button from "@components/Button";

const Register: NextPage = () => {
	return (
		<div>
			<SEO title="회원가입" />
			<p className="text-2xl font-bold pt-5 text-center">10초 만에 가입하고 <br/>맞춤 장학금 확인!</p>
			<div className={"flex justify-center items-center my-10"}>
				<Image src="/header/logo.svg" width="138px" height="138px" />
			</div>
			<div className={"mx-3"}>
				<span className={"fixed py-4 px-4"}>
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
					  <g id="그룹_57743" data-name="그룹 57743" transform="translate(-34 -693)">
					    <path id="패스_34105" data-name="패스 34105" d="M18.206,9.388c-4.8,0-8.688,3.016-8.688,6.735,0,2.423,1.665,4.529,4.141,5.715l-.008.018-1.3,4.443,4.33-3.56a11.212,11.212,0,0,0,1.531.119c4.8,0,8.688-3.015,8.688-6.735s-3.889-6.735-8.688-6.735" transform="translate(30.982 690.112)" fill="#3d2512" stroke="#3d2512" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
					    <rect id="사각형_21315" data-name="사각형 21315" width="30" height="30" transform="translate(34 693)" fill="none"/>
					  </g>
					</svg>
				</span>
				<Button classes={"bg-yellow-400"} text={"카카오톡으로 시작하기"}></Button>
			</div>
		</div>
	);
};

export default Register;
 