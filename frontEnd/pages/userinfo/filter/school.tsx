import { NextPage } from "next";
import Image from "next/image";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { createMuiTheme } from "@mui/material";
import { useForm } from "react-hook-form";

const School: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = () => {
    console.log("search");
  };

  return (
    <div className="w-full mx-4">
      <div className="flex gap-2 items-center h-[3rem]">
        <Image
          src={"/userInfo/filter/school/bag.svg"}
          alt="학교"
          width="30"
          height="30"
        />
        <p>학교 정보를 등록해주세요</p>
      </div>

      <div className="-mx-4 w-full border-solid border-[1px] border-gray-100 rounded-xl mb-6" />

      <section className="flex flex-col gap-2">
        <p>학교</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex items-center"
        >
          <input
            placeholder="내 학교 찾"
            className="w-full bg-gray-300 rounded-md pl-2 h-8"
            {...register("search", { required: true })}
          />
        </form>
      </section>

      <section className="flex flex-col gap-2">
        <p>재학 유무</p>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          className="w-full flex justify-around"
        >
          <FormControlLabel value="재학" control={<Radio />} label="재학" />
          <FormControlLabel value="휴학" control={<Radio />} label="휴학" />
          <FormControlLabel value="졸업" control={<Radio />} label="졸업" />
        </RadioGroup>
      </section>
    </div>
  );
};

export default School;

const blueTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#FC5230",
    },
  },
});
