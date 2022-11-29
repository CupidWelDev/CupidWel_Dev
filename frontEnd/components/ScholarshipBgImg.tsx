export default function ScholarshipBgImg({
  text,
}: {
  text: string;
}): JSX.Element {
  return (
    <div
      className="w-[100%] pb-[100%] bg-[url('/scholarship/bgImg.svg')] bg-cover bg-auto bg-no-repeat
          relative flex justify-center items-center z-0"
    >
      <p className="text-[2rem] text-center font-medium w-9/12 absolute top-[60%] text-center">
        {text}
      </p>
    </div>
  );
}
