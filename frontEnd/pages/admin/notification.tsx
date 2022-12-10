import { NextPage } from "next";
import { FieldValues, useForm } from "react-hook-form";

const Notification: NextPage = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset({ title: "", content: "" });
    //  TODO 알림 보내기 기능 구현 NotificationAPI
  };
  return (
    <div className="w-[100vw] flex flex-col items-center">
      <h1 className="text-2xl mb-10">공지사항</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-10 border-2 w-5/6 rounded-2xl p-10"
      >
        <div>
          <label htmlFor="title">제목</label>
          <input
            id="title"
            type="text"
            placeholder="제목을 입력해주세요"
            {...register("title")}
          />
        </div>
        <div>
          <label htmlFor="content">내용</label>
          <input
            id="content"
            type="text"
            placeholder="내용을 입력해 주세요"
            {...register("content")}
          />
        </div>
        <button type="submit">알람 보내기</button>
      </form>
    </div>
  );
};

export default Notification;
