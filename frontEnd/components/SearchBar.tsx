import { FieldValues, useForm } from "react-hook-form";
import { addDB } from "@libs/IndexedDB";

export default function SearchBar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    addDB(data, "search");
    reset({ search: "" });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex items-center"
    >
      <input
        placeholder="어떤 장학금 원해"
        className="w-full bg-gray-300 rounded-md pl-2 h-8"
        {...register("search", { required: "어떤 장학금?" })}
      />
    </form>
  );
}
