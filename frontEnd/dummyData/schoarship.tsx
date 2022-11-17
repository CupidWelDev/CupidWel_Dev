export const scholarships = [
  {
    id: "1",
    img: "/scholarship/first_data.svg",
    foundation: "OK저축은행",
    title: "선넘는 생활장학금",
    startPeriod: "22.07.11",
    endPeriod: "09.30",
    view: false,
  },
  {
    id: "2",
    img: "/scholarship/second_data.svg",
    foundation: "전라남도 평생교육진흥원",
    title: "제2기 전라남도 해외유학생 모집",
    startPeriod: "22.07.11",
    endPeriod: "09.30",
    view: false,
  },
  {
    id: "3",
    img: "/scholarship/third_data.svg",
    foundation: "하이원",
    title: "하이원 멘토뭐시기",
    startPeriod: "22.07.11",
    endPeriod: "09.30",
    view: true,
  },
  {
    id: "4",
    img: "/scholarship/first_data.svg",
    foundation: "OK저축은행",
    title: "선넘는 생활장학금",
    startPeriod: "22.07.11",
    endPeriod: "09.30",
    view: true,
  },
  {
    id: "5",
    img: "/scholarship/second_data.svg",
    foundation: "전라남도 평생교육진흥원",
    title: "제2기 전라남도 해외유학생 모집",
    startPeriod: "22.07.11",
    endPeriod: "09.30",
    view: true,
  },
  {
    id: "6",
    img: "/scholarship/third_data.svg",
    foundation: "하이원",
    title: "하이원 멘토뭐시기",
    startPeriod: "22.07.11",
    endPeriod: "09.30",
    view: true,
  },
];

export const dummyData = {
  institution: "한국장학재단",
  product: "목포한사랑병원산학협력장학금",
  institution_sort: "한국장학재단",
  product_sort: "장학금",
  schoolexpense_sort: "성적우수",
  univ_sort: "4년제(5~6년제포함)",
  grade_sort: "대학2학기/대학3학기/대학4학기/대학5학기/대학6학기/대학신입생",
  major_sort: "교육계열/사회계열/인문계열",
  grade_stand_detail:
    " * 계속장학생(전공확립유형)백분위 87점 이상 또는 평점 3.50/4.5만점(3.30이상/4.3만점) 최소이수학점 기준 : 직전학기 12학점 이상 * 장학생 중간 평가(2+2) 대상자계절학기 및 재수강 취득 성적을 포함하여 직전 2년간(1∼2학년) 4개 학기(5년제는 5개학기) 성적이 백분위 87점 이상 또는 평점 3.5이상/4.5만점(3.3이상/4.3만점) 성적기준 충족시 나머지 2년간 계속 지원  ※ 자세한 사항은 한국장학 홈페이지 참고",
  income_stand_detail: "해당없음",
  support_detail:
    "등록금 : 장학생 선정 후 매학기별 등록금 전액 지원 (입학금 수업료 기성회비)생활비 : 선발된 장학생은 계속지원 충족 및 대학의 학생 자체평가 후 학기당 2000000원 지원 기초생활수급자 : 계속지원 기준을 충족하는 기초생활수급자는 학기당 2000000원 추가지원",
  qualification_detail:
    " * 대한민국 국적소지자로서 국내 4년제 대학의 인문사회계열 학과(부)에 재학중인 1학년 신입생 또는 3학년전공탐색 : 1학년 신입생전공확립 : 3학년 재학생",
  local_residence_detail: "해당없음",
  duration_detail: "20220316~20220412",
  selection_way_detail:
    "대학별 배정인원 범위 내에서 선발기준에 따라 대학별 자체 선발",
  selection_num_detail:
    " ※ 학교마다 선발하는 인원이 상이하므로 장학부서에 확인 필수",
  qualification_restriction_detail:
    "인문100년 장학금 장학생 자격 유지자 또는 기존 인문 100년장학생으로 선발된 후 영구탈락 된 학생한국장학재단에서 운영중인 타 장학금 기수혜자 또는 장학생 자격 유지자계약학과(등록금전액/일부지원) 선발제외 ※ 자세한 사항 첨부파일 참고",
  recommendation_detail: "해당없음",
  documentaion_detail:
    "신규장학생: 전공탐색유형/ 전공확립유형 : 학업계획서/ 전인적성장계획서 재학중 우수자: 대학자체선발 : 재단으로 직접 제출하는 서류 없음 계속장학생: 중간평가(2+2) : 중간평가서/ 학업장려비 : 진도보고서/ 교수평가서 ※ 자세한 사항은 한국장학재단 홈페이지 참고",
  created_dt: "등록일자",
  modified_dt: "수정일자",
};

/*
- **institution(운영기관명) → pk: char(255)**
- **product(상품명) → pk: char(255)**
- institution_sort(운영기관구분): char(255)
- product_sort(상품구분): char(255)
- schoolexpense_sort(학자금유형구분): char(255)
- univ_sort(대학구분): char(255)
- grade_sort(학년구분): char(255)
- major_sort(학과구분): char(255)
- grade_stand_detail(성적기준 상세내용): text
- income_stand_detail소득기준 상세내용: text
- support_detail(지원내역 상세내용): text
- qualification_detail(특정자격 상세내용): text
- local_residence_detail(지역거주여부 상세내용): text
- duration_detail(신청접수일등 상세내용): text
- selection_way_detail(선발방법 상세내용): text
- selection_num_detail(선발인원 상세내용): text
- qualification_restriction_detail(자격제한 상세내용): text
- recommendation_detail(추천방법 상세내용): text
- documentaion_detail(제출서류 상세내용): text
- created_dt(등록 일자): timestamp without timezone
- modified_dt(수정일자): timestamp without timezone*/
