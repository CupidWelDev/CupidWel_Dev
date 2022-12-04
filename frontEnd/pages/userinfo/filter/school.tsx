import { NextPage } from "next";
import Image from "next/image";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FieldValues, useForm } from "react-hook-form";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import SEO from "@components/SEO";

interface IUserInfo {
  school?: string;
  series?: string;
  major?: string;
  credit?: number;
  semester?: string;
}

const School: NextPage = () => {
  const schoolList = ["", "한양대", "서울대", "고려대"];
  const seriesList = ["", "공학", "인문", "사회"];
  const majorList = ["", "컴퓨터공학", "전자공학", "경영학", "경제학"];

  const initialVal: IUserInfo = {
    school: "",
    series: "",
    major: "",
    credit: undefined,
    semester: "",
  };

  const [info, setInfo] = useState<IUserInfo | null>(initialVal);
  const [inputValue, setInputValue] = useState<IUserInfo | null>(initialVal);
  const [total, setTotal] = useState(4.5);
  const { handleSubmit, setValue, getValues } = useForm();

  console.log("userinfo: ", info);
  console.log("userinfo: ", inputValue);

  const onSubmit = (data: FieldValues) => {
    console.log("POST_data : ", data);

    // 초기화
    setInfo(initialVal);
    setInputValue(initialVal);
  };

  return (
    <div className="w-full px-4">
      <SEO title={"맞춤필터"} />
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

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col justify-center"
      >
        {/*학교*/}
        <section className="w-full flex flex-col gap-2">
          <p>학교</p>
          <Autocomplete
            className="w-full mb-5"
            value={info?.school}
            onChange={(event: any, newValue: string | null) => {
              setInfo({ ...info, school: newValue || undefined });
              setValue("school", newValue);
              console.log("value", getValues());
            }}
            inputValue={inputValue?.school}
            onInputChange={(event, newInputValue) => {
              setInputValue({ ...info, school: newInputValue });
            }}
            id="controllable-states-demo"
            options={schoolList}
            renderInput={(params) => (
              <TextField {...params} label="우리 학교 찾기" />
            )}
          />
        </section>

        {/*계열, 학과*/}
        <section className="w-full flex gap-2 mb-5">
          <div className="w-1/2">
            <p>계열</p>
            <Autocomplete
              className="w-full mt-2"
              value={info?.series}
              onChange={(event: any, newValue: string | null) => {
                setInfo({ ...info, series: newValue || undefined });
                setValue("series", newValue);
              }}
              inputValue={inputValue?.series}
              onInputChange={(event, newInputValue) => {
                setInputValue({ ...info, series: newInputValue });
              }}
              id="controllable-states-demo"
              options={seriesList}
              renderInput={(params) => (
                <TextField {...params} label="나의 계열은?" />
              )}
            />
          </div>
          <div className="w-1/2">
            <p>학과</p>
            <Autocomplete
              className="w-full mt-2"
              value={info?.major}
              onChange={(event: any, newValue: string | null) => {
                setInfo({ ...info, major: newValue || undefined });
                setValue("major", newValue);
              }}
              inputValue={inputValue?.major}
              onInputChange={(event, newInputValue) => {
                setInputValue({ ...info, major: newInputValue });
              }}
              id="controllable-states-demo"
              options={majorList}
              renderInput={(params) => <TextField {...params} label="학과" />}
            />
          </div>
        </section>
        {/*학점*/}
        <section className="w-full flex flex-col items-center gap-2">
          <div className="flex  items-center gap-10">
            <p>학점</p>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              className="w-1/2 flex h-[3rem] flex-1"
              onChange={(e: any) => {
                setTotal(e.currentTarget.value);
              }}
            >
              <FormControlLabel
                value="4.3"
                control={<Radio className="text-xs" />}
                label="4.3기준"
              />
              <FormControlLabel
                value="4.5"
                control={<Radio />}
                label="4.5기준"
              />
              <FormControlLabel
                value="100"
                control={<Radio />}
                label="100기준"
              />
            </RadioGroup>
          </div>
          <div className="w-1/2 flex relative">
            <input
              type="text"
              id="last"
              name="last"
              value={info?.credit === undefined ? "" : info?.credit}
              className="border-2 w-full border-gray-300 rounded-md p-2 text-right pr-11"
              onChange={(e: any) => {
                setInfo({
                  ...info,
                  credit: e.currentTarget.value || undefined,
                });
                setValue("credit", e.currentTarget.value);
              }}
            />
            <p className="absolute right-3 pt-[0.6rem] text-gray-400">
              /{total}
            </p>
          </div>
        </section>
        {/*재학유무*/}
        <section className="flex flex-col gap-2">
          <p>재학 유무</p>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            className="w-full flex justify-around"
            onChange={(event: any, newValue: string | null) => {
              setInfo({ ...info, semester: newValue || undefined });
              setValue("semester", newValue);
            }}
          >
            <FormControlLabel value="재학" control={<Radio />} label="재학" />
            <FormControlLabel value="휴학" control={<Radio />} label="휴학" />
            <FormControlLabel value="졸업" control={<Radio />} label="졸업" />
          </RadioGroup>
        </section>

        {/*제출버튼*/}
        <button
          type="submit"
          className="w-full bg-[#FC5230] rounded-xl h-[4rem] text-white my-5"
        >
          등록완료
        </button>
      </form>
    </div>
  );
};

export default School;
