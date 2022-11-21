import {NextPage} from "next";
import SEO from "@components/SEO";

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


		</div>
	)
}

export default Setting