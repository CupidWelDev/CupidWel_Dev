import { cls, cutText } from "@libs/utils";

interface IBgImg {
  text: string;
  type: string;
}

export default function ScholarshipBgImg({ text, type }: IBgImg): JSX.Element {
  return (
    <div
      className="w-full pb-[100%] bg-[url('/scholarship/bgImg.svg')] bg-cover bg-no-repeat
          relative flex justify-center items-center z-0"
    >
      <p
        className={cls(
          type === "small"
            ? "text-[0.9rem] top-[65%]"
            : "text-[2rem] top-[60%]",
          " text-center font-medium w-9/12 absolute top-[60%] text-center"
        )}
      >
        {cutText(text, 10)}
      </p>
    </div>
  );
}
