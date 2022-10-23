import {useRouter} from "next/router";

interface GoBackButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function GoBackButton({ onClick }: GoBackButtonProps) {
	return (
		<button className="pr-5" onClick={onClick}>
			<svg id="구성_요소_18_6" data-name="구성 요소 18 – 6" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
        <rect id="사각형_4411" data-name="사각형 4411" width="30" height="30" fill="none"/>
        <g id="그룹_56405" data-name="그룹 56405">
          <path id="패스_4270" data-name="패스 4270" d="M-9341.887-316.75l-8.4,8,8.4,8" transform="translate(9355.894 323.75)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1.5"/>
          <path id="패스_23622" data-name="패스 23622" d="M10.274,15H28.389" transform="translate(-3.994)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1.5"/>
        </g>
			</svg>
		</button>
	);
}