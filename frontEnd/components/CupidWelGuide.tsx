interface IProps {
  URL?: string;
  img?: string;
  text?: string;
}

export default function CupidWelGuide({ URL, img, text }: IProps) {
  return (
    <div className="w-[335px] h-[70px] p-4 border-solid border-2 border-sky-500 rounded-xl">
      {text}
    </div>
  );
}
