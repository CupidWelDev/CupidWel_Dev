// searchBar

import React, {useState} from "react";
import {useRouter} from "next/router";

export default function SearchBar() {
	const [search, setSearch] = useState("");
	const [isFocus, setIsFocus] = useState(false);
	const router = useRouter();

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleFocus = () => {
		setIsFocus(true);
	};

	const handleBlur = () => {
		setIsFocus(false);
	};

	const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (search) {
			router.push(`/scholarship/search?query=${search}`);
		}
	};

	return (
		<div>
			<form
				onSubmit={handleSearchSubmit}
				className="flex items-center justify-center w-full h-12 bg-gray-200 rounded-md"
			>
				<input
					className="w-full h-full pl-4 bg-transparent outline-none"
					type="text"
					placeholder="어떤 장학금을 찾으시나요?"
					value={search}
					onChange={handleSearch}
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>
				<button
					type="submit"
					className={"bg-gray-200 w-16 h-12 flex bg-transparent items-center justify-center"}
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 12.226 12.318">
						<g id="그룹_3847" data-name="그룹 3847" transform="translate(0.75 0.75)">
							<circle id="타원_36" data-name="타원 36" cx="4.465" cy="4.465" r="4.465" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="1.5"/>
							<line id="선_29" data-name="선 29" x2="2.648" y2="2.687" transform="translate(7.767 7.821)" fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5"/>
						</g>
					</svg>
				</button>
			</form>

			{/*	Filtering */}
			<div className={"mt-3 flex gap-1.5"}>
				<button className={"bg-white w-9 h-9 flex items-center justify-center border-2 rounded-md"}>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
						<g id="그룹_57725" data-name="그룹 57725" transform="translate(-21 -115)">
							<g id="그룹_57682" data-name="그룹 57682" transform="translate(154.919 94.083) rotate(90)">
								<path id="패스_23521" data-name="패스 23521" d="M2499.417,117.824v14.19" transform="translate(-2474 -1)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="1.2"/>
								<path id="패스_23522" data-name="패스 23522" d="M2499.417,117.824v14.19" transform="translate(-2468.363 -1)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="1.2"/>
								<path id="패스_23523" data-name="패스 23523" d="M2499.417,117.824v14.19" transform="translate(-2462.725 -1)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="1.2"/>
								<g id="타원_1566" data-name="타원 1566" transform="translate(23 118.604)" fill="#fff" stroke="#000" strokeWidth="1.2">
									<circle cx="2.328" cy="2.328" r="2.328" stroke="none"/>
									<circle cx="2.328" cy="2.328" r="1.728" fill="none"/>
								</g>
								<g id="타원_1567" data-name="타원 1567" transform="translate(28.588 124.902)" fill="#fff" stroke="#000" strokeWidth="1.2">
									<circle cx="2.328" cy="2.328" r="2.328" stroke="none"/>
									<circle cx="2.328" cy="2.328" r="1.728" fill="none"/>
								</g>
								<g id="타원_1568" data-name="타원 1568" transform="translate(34.176 120.76)" fill="#fff" stroke="#000" strokeWidth="1.2">
									<circle cx="2.328" cy="2.328" r="2.328" stroke="none"/>
									<circle cx="2.328" cy="2.328" r="1.728" fill="none"/>
								</g>
							</g>
							<rect id="사각형_21306" data-name="사각형 21306" width="20" height="20" transform="translate(21 115)" fill="none"/>
						</g>
					</svg>
				</button>
				<span className={"bg-black h-9 text-white text-sm rounded-md flex items-center justify-center p-3 gap-1"}>
					건국대/시각
					<button>
						<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 12 12">
						  <g id="그룹_57723" data-name="그룹 57723" transform="translate(-112.876 -119.876)">
						    <g id="그룹_47161" data-name="그룹 47161" transform="translate(115.824 122.824)">
						      <path id="패스_20712" data-name="패스 20712" d="M0,0H8.633" transform="translate(0 0) rotate(45)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1"/>
						      <path id="패스_20713" data-name="패스 20713" d="M0,0H8.633" transform="translate(6.105 0) rotate(135)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1"/>
						    </g>
						    <rect id="사각형_21305" data-name="사각형 21305" width="12" height="12" transform="translate(112.876 119.876)" fill="none"/>
						  </g>
						</svg>
					</button>
				</span>
			</div>
		</div>
	);
}