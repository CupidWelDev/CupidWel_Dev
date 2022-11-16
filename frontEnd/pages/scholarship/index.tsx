import type { NextPage } from "next";
import SEO from "@components/SEO";
import CategoryScholarship from "@components/CategoryScholarship";
import {scholarships} from "../../dummyData/schoarship";
import Darr from "public/scholarship/darr.svg";

const Scholarship: NextPage = () => {
	return (
		<div className="w-full h-100vh flex flex-col items-center">
			<SEO title="탐색" />

			{/* 장학금 정보 */}
			<section className="w-full flex flex-col gap-2">
				<div className={"flex justify-between px-5"}>
					<span className="text-xl font-bold">장학금 정보</span>
					<span className="text-xs flex items-center gap-1">
						인기순
						<Darr />
					</span>
				</div>
				<CategoryScholarship />
			</section>

			{/* 장학금 목록 */}
			<section className="w-full flex flex-col bg-red-400">
				{scholarships.map((scholarship, idx) => (
					<div className={"flex justify-center items-center mb-5"}>
						...
					</div>
				))}
			</section>
		</div>
	);
};

export default Scholarship;
