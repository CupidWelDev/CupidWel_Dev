import type { NextPage } from "next";
import SEO from "@components/SEO";
import CategoryScholarship from "@components/CategoryScholarship";
import {scholarships} from "../../dummyData/schoarship";
import ScholarshipDetailVer from "@components/ScholarshipDetailVer";

const Scholarship: NextPage = () => {
	return (
		<div className="w-[375px] h-100vh flex flex-col items-center">
			<SEO title="탐색" />
			<section className="flex flex-col pt-5">
				<p className="text-xl font-bold px-5"> 카테고리 별</p>
				<CategoryScholarship />
			</section>
			<section className="grid grid-cols-2 mt-10 mx-4">
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
