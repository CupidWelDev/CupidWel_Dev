import { NextPage } from "next";
import { FieldValues, useForm } from "react-hook-form";

const Scholarship: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const { register: deleteData, handleSubmit: deleteSubmit } = useForm();

  const addScholarship = (data: FieldValues) => {
    console.log({
      ...data,
      createdDt: new Date().toISOString(),
      modifiedDt: new Date().toISOString(),
      likeNum: 0,
      scrapNum: 0,
    });
  };

  const deleteScholarship = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="w-[100vw] flex flex-col items-center">
      <h1 className="text-2xl mb-10">장학금 추가 / 삭제</h1>

      {/*  장학금 추가*/}
      <form
        onSubmit={handleSubmit(addScholarship)}
        className="flex flex-col items-center gap-10 border-2 w-5/6 rounded-2xl p-10"
      >
        <div className="w-full">
          <label htmlFor="institution">운영기관명</label>
          <input
            id="institution"
            type="text"
            className="ml-4 w-4/6"
            placeholder="운영기관명을 입력해주세요"
            {...register("institution")}
          />
        </div>
        <div className="w-full">
          <label htmlFor="product">상품명</label>
          <input
            id="product"
            type="text"
            className="ml-4 w-4/6"
            placeholder="상품명을 입력해주세요"
            {...register("product")}
          />
        </div>
        <div className="w-full">
          <label htmlFor="institutionSort">운영기관구분</label>
          <input
            id="institutionSort"
            type="text"
            className="ml-4 w-4/6"
            placeholder="운영기관구분을 입력해주세요"
            {...register("institutionSort")}
          />
        </div>
        <div className="w-full">
          <label htmlFor="productSort">상품구분</label>
          <input
            id="productSort"
            type="text"
            className="ml-4 w-4/6"
            placeholder="상품구분을 입력해주세요"
            {...register("productSort")}
          />
        </div>
        <div className="w-full">
          <label htmlFor="schoolexpenseSort">학자금유형구분</label>
          <input
            id="schoolexpenseSort"
            type="text"
            className="ml-4 w-4/6"
            placeholder="학자금유형구분을 입력해주세요"
            {...register("schoolexpenseSort")}
          />
        </div>
        <div className="w-full">
          <label htmlFor="univSort">대학구분</label>
          <input
            id="univSort"
            type="text"
            className="ml-4 w-4/6"
            placeholder="대학구분 입력해주세요"
            {...register("univSort")}
          />
        </div>
        <div className="w-full">
          <label htmlFor="gradeSort">학년구분</label>
          <input
            id="gradeSort"
            type="text"
            className="ml-4 w-4/6"
            placeholder="학년구분을 입력해주세요"
            {...register("gradeSort")}
          />
        </div>
        <div className="w-full">
          <label htmlFor="majorSort">학과구분</label>
          <input
            id="majorSort"
            type="text"
            className="ml-4 w-4/6"
            placeholder="학과구분을 입력해주세요"
            {...register("majorSort")}
          />
        </div>
        <div className="w-full">
          <label htmlFor="gradeStandDetail">성적기준 상세내용</label>
          <input
            id="gradeStandDetail"
            type="text"
            className="ml-4 w-4/6"
            placeholder="성적기준 상세내용을 입력해주세요"
            {...register("gradeStandDetail")}
          />
        </div>
        <div className="w-full">
          <label htmlFor="incomeStandDetail">소득기준 상세내용</label>
          <input
            id="incomeStandDetail"
            type="text"
            className="ml-4 w-4/6"
            placeholder="소득기준 상세내용을 입력해주세요"
            {...register("incomeStandDetail")}
          />
        </div>
        <div className="w-full">
          <label htmlFor="supportDetail">지원내역 상세내용</label>
          <input
            id="supportDetail"
            type="text"
            className="ml-4 w-4/6"
            placeholder="지원내역 상세내용을 입력해주세요"
            {...register("supportDetail")}
          />
        </div>
        <div className="w-full">
          <label htmlFor="qualificationDetail">특정자격 상세내용</label>
          <input
            id="qualificationDetail"
            type="text"
            className="ml-4 w-4/6"
            placeholder="특정자격  상세내용을 입력해주세요"
            {...register("qualificationDetail")}
          />
        </div>
        <div className="w-full">
          <label htmlFor="localResidenceDetail">지역거주여부 상세내용</label>
          <input
            id="localResidenceDetail"
            type="text"
            className="ml-4 w-4/6"
            placeholder="지역거주여부 상세내용을 입력해주세요"
            {...register("localResidenceDetail")}
          />
        </div>
        <div className="w-full">
          <label htmlFor="selectionWayDetail">선발방법 상세내용</label>
          <input
            id="selectionWayDetail"
            type="text"
            className="ml-4 w-4/6"
            placeholder="선발방법 상세내용을 입력해주세요"
            {...register("selectionWayDetail")}
          />
        </div>
        <div className="w-full">
          <label htmlFor="selectionNumDetail">선발인원 상세내용</label>
          <input
            id="selectionNumDetail"
            type="text"
            className="ml-4 w-4/6"
            placeholder="선발인원 상세내용을 입력해주세요"
            {...register("selectionNumDetail")}
          />
        </div>
        <div className="w-full">
          <label htmlFor="qualificationRestrictionDetail">
            자격제한 상세내용
          </label>
          <input
            id="qualificationRestrictionDetail"
            type="text"
            className="ml-4 w-4/6"
            placeholder="자격제한 상세내용을 입력해주세요"
            {...register("qualificationRestrictionDetail")}
          />
        </div>
        <div className="w-full">
          <label htmlFor="recommendationDetail">추천방법 상세내용</label>
          <input
            id="recommendationDetail"
            type="text"
            className="ml-4 w-4/6"
            placeholder="추천방법 상세내용을 입력해주세요"
            {...register("recommendationDetail")}
          />
        </div>
        <div className="w-full">
          <label htmlFor="documentaionDetail">제출서류 상세내용</label>
          <input
            id="documentaionDetail"
            type="text"
            className="ml-4 w-4/6"
            placeholder="제출서류 상세내용을 입력해주세요"
            {...register("documentaionDetail")}
          />
        </div>
        <div className="w-full">
          <label htmlFor="startDate">시작일</label>
          <input
            id="startDate"
            type="text"
            className="ml-4 w-4/6"
            placeholder="시작일을 입력해주세요"
            {...register("startDate")}
          />
        </div>
        <div className="w-full">
          <label htmlFor="endDate">종료일</label>
          <input
            id="endDate"
            type="text"
            className="ml-4 w-4/6"
            placeholder="종료일을 입력해주세요"
            {...register("endDate")}
          />
        </div>
        <div className="w-full">
          <label htmlFor="documentaionDetail">성적기준</label>
          <input
            id="documentaionDetail"
            type="text"
            className="ml-4 w-4/6"
            placeholder="성적기준을 입력해주세요"
            {...register("documentaionDetail")}
          />
        </div>
        <div className="w-full">
          <label htmlFor="scholarshipType">장학금 타입</label>
          <input
            id="scholarshipType"
            type="text"
            className="ml-4 w-4/6"
            placeholder="장학금 타입을 입력해주세요"
            {...register("scholarshipType")}
          />
        </div>
        <div className="w-full">
          <label htmlFor="incomeStand">소득분위</label>
          <input
            id="incomeStand"
            type="text"
            className="ml-4 w-4/6"
            placeholder="소득분위을 입력해주세요"
            {...register("incomeStand")}
          />
        </div>
        <div className="w-full">
          <label htmlFor="allowMultiple">중복수혜가능여부</label>
          <input
            id="allowMultiple"
            type="text"
            className="ml-4 w-4/6"
            placeholder="중복수혜가능여부을 입력해주세요"
            {...register("allowMultiple")}
          />
        </div>

        <button type="submit">장학금 추가</button>
      </form>

      {/*  장학금 삭제*/}
      <form
        onSubmit={deleteSubmit(deleteScholarship)}
        className="flex flex-col items-center gap-10 border-2 w-5/6 rounded-2xl p-10"
      >
        <div className="w-full">
          <label htmlFor="id">장학금 id</label>
          <input
            id="id"
            type="text"
            className="ml-4 w-4/6"
            placeholder="id"
            {...deleteData("id")}
          />
        </div>

        <button type="submit">장학금 삭제</button>
      </form>
    </div>
  );
};

export default Scholarship;
