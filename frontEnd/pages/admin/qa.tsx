import { NextPage } from "next";
import { FieldValues, useForm } from "react-hook-form";

const Qa: NextPage = () => {
  const { register, handleSubmit, reset } = useForm();

  //TODO 질문 PK추가
  const id = "1";
  const onSubmit = (data: FieldValues) => {
    console.log({ ...data, id: id });
  };
  return (
    <div className="w-[100vw]">
      <section className="w-full flex border-2">
        <div className="w-1/3 text-center ">
          <p>유저</p>
          <div>유저pk</div>
        </div>
        <div className="w-1/3 text-center">
          <p>질문</p>
          <div>질문text</div>
        </div>
        <div className="w-1/3 text-center">
          <p>답변</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              id="answer"
              type="text"
              placeholder="답변"
              {...register("answer")}
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Qa;
