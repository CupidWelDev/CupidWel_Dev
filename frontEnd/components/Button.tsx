interface ButtonProps {
	large?: boolean;
	classes?: string;
	text: string;
	[key: string]: any;
}

export default function Button({ large = false, classes, onClick, text, ...rest }: ButtonProps) {
	return (
		<button
			{...rest}
			className={`${classes} w-full py-4 text-base px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2`}
		>
			{text}
		</button>
	);
}