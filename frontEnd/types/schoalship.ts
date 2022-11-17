export interface IScholarData {
  institution: string;
  product: string;
  institution_sort: string;
  product_sort: string;
  schoolexpense_sort: string;
  univ_sort: string;
  grade_sort: string;
  major_sort: string;
  grade_stand_detail: string;
  income_stand_detail: string;
  support_detail: string;
  qualification_detail: string;
  local_residence_detail: string;
  duration_detail: string;
  selection_way_detail: string;
  selection_num_detail: string;
  qualification_restriction_detail: string;
  recommendation_detail: string;
  documentaion_detail: string;
  created_dt: string;
  modified_dt: string;
}

export interface IScholarship {
  id: number;
  img: string;
  foundation: string;
  title: string;
  startPeriod: string;
  endPeriod: string;
  view: false;
}
