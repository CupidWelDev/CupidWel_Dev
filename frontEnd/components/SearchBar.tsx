import { FieldValues, useForm } from "react-hook-form";
import { addDB, getDB } from "@libs/IndexedDB";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [recentlySearch, setRecentlySearch] = useState<any[]>();

  const onSubmit = (data: FieldValues) => {
    addDB(
      {
        id: new Date().getTime(),
        ...data,
      },
      "search"
    );
    console.log(data);
    reset({ search: "" });
  };

  useEffect(() => {
    getDB(setRecentlySearch, "search");
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex items-center"
    >
      <input
        placeholder="어떤 장학금을 찾으시나요?"
        className="w-full bg-gray-300 rounded-md pl-2 h-8"
        {...register("search", { required: true })}
      />
    </form>
  );
}
